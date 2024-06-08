import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-[400]">
      <div className="grid grid-flow-row w-screen place-items-center gap-4">
        <button
          className="p-4 w-[80%] bg-blue-500"
          onClick={() => setCount(count + 1)}
        >
          Counter
        </button>
        <span>Counter: {count}</span>
      </div>
    </div>
  );
}

export default App;
