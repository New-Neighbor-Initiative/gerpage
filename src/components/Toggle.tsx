import { useState } from "react";
import "./Toggle.css";

function Toggle() {
  const [on, setOn] = useState(false);

  return (
    <button
      className={`toggle ${on ? "on" : ""}`}
      onClick={() => setOn(!on)}
      aria-pressed={on}
    >
      <span className="knob">
        {!on && "✕"}
      </span>
    </button>
  );
}

export default Toggle;
