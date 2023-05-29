import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

export default function App() {
  const [firstNum, setFirstNum] = useState();
  const [secondNum, setSecondNum] = useState();
  const [result, setResult] = useState(0);

  const onFirstNumChange = (e) => {
    setFirstNum(Number(e.target.value));
  };

  const onSecondNumChange = (e) => {
    setSecondNum(Number(e.target.value));
  };

  const addNums = () => {
    setResult(firstNum + secondNum);
  };

  const subNums = () => {
    setResult(firstNum - secondNum);
  };

  const divideNums = () => {
    setResult(firstNum / secondNum);
  };

  const multiplyNums = () => {
    setResult(firstNum * secondNum);
  };

  const resetCalculator = () => {
    setFirstNum(0);
    setSecondNum(0);
    setResult(null)
  }

  return (
    <>
      <div className="flex flex-col self-center w-64 md:w-96 p-4 space-y-10 bg-white rounded-lg shadow hover:shadow-lg justify-center items-center container">
        <div className="flex flex-col space-y-4 items-center">
          
          <div id="result" className="w-32 h-32 border-[3px] border-blue-500 hover:shadow-md rounded-full flex justify-center items-center cursor-pointer" onClick={resetCalculator} >
            {result ? <p className="text-2xl font-medium">{result}</p>: <p className="text-xl font-medium">Result</p>}
          </div>
          <Input
            value={firstNum}
            onChange={onFirstNumChange}
            placeholder="Enter number..."
          />
          <Input
            value={secondNum}
            onChange={onSecondNumChange}
            placeholder="Enter number..."
          />
        </div>
        <div id="buttonContainer" className="flex flex-col space-y-3">
          <Button className="bg-red-600" onClick={addNums}>
            Add
          </Button>
          <Button className="bg-orange-600" onClick={subNums}>
            Subtract
          </Button>
          <Button className="bg-lime-600" onClick={multiplyNums}>
            Multiply
          </Button>
          <Button className="bg-teal-600" onClick={divideNums}>
            Divide
          </Button>
        </div>
      </div>
    </>
  );
}
