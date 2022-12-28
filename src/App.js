import React, { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState(null);
  const [link, setLink] = useState("");
  const [currentLink, setCurrentLink] = useState("");

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])
  

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme])
  
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  function handleChangeText(e) {
    setLink(e.target.value);
  };

  function handleSubmit() {
    setCurrentLink(link);
  };

  return (
    <div className="flex w-full bg-white dark:bg-black h-screen flex-col justify-center items-center pt-2">
      <div className="flex m-3">
        <input 
          type="text"
          className="border-2 border-black rounded-full w-full mr-2 p-3"
          placeholder="Please put your youtube link..."
          onChange={handleChangeText}
        />
        <button 
          className="bg-teal-300 p-3 mr-2 border-2 border-black rounded-full"
          onClick={handleSubmit}
        >
          <p className="text-white font-bold">Submit</p>
        </button>
        <button 
          className="bg-gray-200 rounded-full font-bold p-2 border-2 border-cyan-700" 
          onClick={handleThemeSwitch}
        >
          Dark Mode
        </button>
      </div>
      <iframe 
        title="my ytb"
        id="widgetv2Api" 
        src={`https://convert2mp3s.com/api/widgetv2?url=${currentLink}`}
        width="100%" 
        height="100%" 
        allowtransparency="true" 
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}

export default App;
