import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [code, setCode] = useState("");
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [strength, setStrength] = useState("Weak");

  const handleSliderChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setLength(newValue);
  };

  const generateCode = () => {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let chars = "";
    if (includeUppercase) chars += uppercaseChars;
    if (includeLowercase) chars += lowercaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSymbols) chars += symbolChars;

    let generatedCode = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedCode += chars.charAt(randomIndex);
    }

    setCode(generatedCode);

    // Calculate code strength
    let codeStrength = "Weak";
    if (generatedCode.length >= 8) codeStrength = "Good";
    if (generatedCode.length >= 12) codeStrength = "Strong";

    setStrength(codeStrength);
  };

  return (
    <div className="App">
      <div className="code">
        <div>
          <span style={{ color: "hsl(180, 54%, 35%)" }} className="code-label">
            Generated Code:
          </span>
          <span
            className="copy-button"
            onClick={() => navigator.clipboard.writeText(code)}
          >
            Copy
          </span>
        </div>
        <div className="code-value">{code}</div>
      </div>
      <div className="options">
        <div style={{ marginLeft: "24px" }}>
          <span
            style={{ fontSize: "20px", paddingTop: "200%" }}
            className="option-label"
          >
            Character Length: {length}
          </span>
          <input
            id="myinput"
            className="rangee "
            type="range"
            min="1"
            max="20"
            step="1"
            value={length}
            // onChange={(e) => setLength(e.target.value)}
            onChange={handleSliderChange}
            style={{
              background: `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${
                ((length - 1) / 19) * 100
              }%, #fff ${((length - 1) / 19) * 100}%, white 100%)`
            }}
          />
        </div>
        {/* <div>
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
          />
          <span className="option-label">Include Uppercase Letters</span>
        </div>
        <div>
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={() => setIncludeLowercase(!includeLowercase)}
          />
          
          <span className="option-label">Include Lowercase Letters</span>
        </div>
        <div>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          <span className="option-label fixing">Include Numbers</span>
        </div>
        <div>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
          <span className="option-label">Include Symbols</span>
        </div> */}
        <div className="arrange">
          <div style={{ marginBottom: "12px", marginLeft: "24px" }}>
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
            />
            <span style={{ marginLeft: "10px" }} className="option-label">
              Include Uppercase Letters
            </span>
          </div>

          <div style={{ marginBottom: "12px", marginLeft: "24px" }}>
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
            />
            <span style={{ marginLeft: "10px" }} className="option-label">
              Include Lowercase Letters
            </span>
          </div>
          <div style={{ marginBottom: "12px", marginLeft: "24px" }}>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            <span
              style={{ marginLeft: "10px" }}
              className="option-label fixing"
            >
              Include Numbers
            </span>
          </div>
          <div style={{ marginLeft: "24px" }}>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
            <span style={{ marginLeft: "10px" }} className="option-label">
              Include Symbols
            </span>
          </div>
        </div>
      </div>

      <button className="strength">
        STRENGTH: <span>{strength} </span>{" "}
      </button>
      <button className="generate-button" onClick={generateCode}>
        GENERATE
      </button>
    </div>
  );
}
