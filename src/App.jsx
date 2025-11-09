import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'

function App() {
  const [color, setColor] = useState("#3498db");
  const generateColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };
  const copyColor = () => {
    navigator.clipboard.writeText(color);
    alert(`Copied ${color} to clipboard`);
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
        </div>
      </div>
    </div>
  );
}

export default App;
