import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'

function App() {
  const [color, setColor] = useState("#3498db");
  // const [favorites, setFavorites] = useState([]);
  const [favorites, setFavorites] = useState(() => {
  // Load from localStorage immediately during initialization
  const saved = localStorage.getItem("favorites");
  return saved ? JSON.parse(saved) : [];
});

useEffect(() => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}, [favorites]);

  // Load saved favorites from localStorage when app starts

  // useEffect(() => {
  //   const savedFavorites = localStorage.getItem("favorites");
  //  if(savedFavorites){
  //   setFavorites(JSON.parse(savedFavorites)); 
  //  }
  // }, []);

  // //Save favorites to localStorage whenever they change
  // useEffect(() => {
  //   localStorage.setItem("favorites", JSON.stringify(favorites));
  // }, [favorites]);

  const generateColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };
  const copyColor = () => {
    navigator.clipboard.writeText(color);
    alert(`Copied ${color} to clipboard`);
  };
  const addFavorite = () => {
    if (!favorites.includes(color)) {
      setFavorites([...favorites, color]);
    } else {
      alert("Color already saved!");
    }
  };
  const removeFavorite = (c) => {
    setFavorites(favorites.filter((fav) => fav !== c));
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center transition-colors duration-300  "
      style={{ backgroundColor: color }}
    >
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">🎨 Color Generator</h1>
        {/* color and code showing div */}
        <div
          className="w-40 h-40 mx-auto mb-4 rounded-lg border-2 border-gray-200"
          style={{ backgroundColor: color }}
        ></div>
        <p className="text-lg font-semibold mb-3">{color}</p>
        {/* buttons */}
        <div className="flex justify-center gap-3">
          <button
            onClick={generateColor}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Generate
          </button>
          <button
            onClick={copyColor}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Copy
          </button>
          <button
            onClick={addFavorite}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Save
          </button>
        </div>
        {favorites.length > 0 && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Saved Color</h2>
            <div>
              {favorites.map((fav) => (
                <div key={fav} className="flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-lg border cursor-pointer"
                    style={{ backgroundColor: fav }}
                    onClick={() => setColor(fav)}
                  ></div>
                  <span className="text-sm mt-1">{fav}</span>
                  <button
                    onClick={() => removeFavorite(fav)}
                    className="text-xs text-red-500 hover:underline mb-2"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
