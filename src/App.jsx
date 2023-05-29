import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

export default function App() {
  const [count, setCount] = useState(40);

  const incrementCounter = () => {
    setCount((prevState) => (prevState === 100 ? prevState : prevState + 10));
  };

  const decrementCounter = () => {
    setCount((prevState) => (prevState === 0 ? prevState : prevState - 10));
  };

  return (
    <div className="flex items-center  flex-col md:flex-row justify-evenly  h-screen">
      <Button onClick={decrementCounter}>Decrement</Button>
      <div className="relative w-24 h-24">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-200 rounded-full"></div>
        <div
          className="absolute top-0 left-0 w-full h-full bg-blue-500 rounded-full"
          style={{
            clipPath: `polygon(0% 0%, 0% 100%, ${count}% 100%, ${count}% 0%)`,
            transition: "clip-path 0.5s ease-in-out",
          }}
        ></div>
        <div className="absolute flex items-center justify-center w-full h-full">
          <span className="text-xl font-bold text-inherit">{count / 10}</span>
        </div>
      </div>
      <Button onClick={incrementCounter}>Increment</Button>
    </div>
  );
}
