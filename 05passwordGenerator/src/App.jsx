import { useState, useEffect, useCallback, useRef } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [numAllowed, setnumAllowed] = useState(false);
  const [specialCharAllowed, setspecialCharAllowed] = useState(false);

  const generatePassword = useCallback(() => {
    let charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) {
      charSet += "0123456789";
    }

    if (specialCharAllowed) {
      charSet += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }

    let generatedPassword = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      generatedPassword += charSet.charAt(randomIndex);
    }

    setPassword(generatedPassword);
  }, [length, numAllowed, specialCharAllowed]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const passwordRef = useRef(null);

  const copyToClipboard = () => {
    passwordRef.current?.select();
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-gray-800 p-8 rounded-2xl shadow-2xl">

        <h1 className="text-3xl font-bold text-center text-white mb-8">
          Password Generator
        </h1>

        <div className="flex overflow-hidden rounded-xl border border-gray-600 mb-8">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            readOnly
            className="flex-1 bg-white h-12 px-4 text-red-600 text-lg outline-none"
          />

          <button
            className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white px-6 font-semibold"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>

        <div className="flex flex-wrap gap-6 items-center justify-center">

          <div className="flex items-center gap-3">
            <input
              type="range"
              min="10"
              max="50"
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />

            <label className="text-white font-medium">
              Length: {length}
            </label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numAllowed}
              className="w-5 h-5 accent-blue-500 cursor-pointer"
              onChange={() => setnumAllowed(!numAllowed)}
            />

            <label className="text-white font-medium">
              Numbers
            </label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={specialCharAllowed}
              className="w-5 h-5 accent-blue-500 cursor-pointer"
              onChange={() => setspecialCharAllowed(!specialCharAllowed)}
            />

            <label className="text-white font-medium">
              Special Characters
            </label>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App