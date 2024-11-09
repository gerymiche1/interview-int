import { useState } from "react";
import "./styles.css";

export default function App() {

  const [inputNumber, setInputNumber] = useState();
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [result, setResult] = useState(0);

  function handleInput() {
    //please put your logic here
    const arrNumber = inputNumber.toString().split('').filter((checkNumber) => checkNumber >= '0' && checkNumber <= '9');
    let reversed = '';

    for (let i = 0; i < arrNumber.length; i++){
      reversed = reversed + arrNumber[arrNumber.length-1-i];
    }

    setNumber1(Math.abs(arrNumber.join('')));
    setNumber2(Math.abs(reversed));
    setResult(Math.abs(Math.abs(reversed) - Math.abs(arrNumber.join(''))));
  }

  return (
    <div className="App">
      <div>
        Number: <input type="number" value={inputNumber} onChange={(e) => {setInputNumber(e.target.value)}} />
        <button onClick={() => {handleInput()}}>Submit</button>
      </div>
      <div>Result: Normal number is {number1 ? number1 : 0}, Reversed number is {number2 ? number2 : 0}, The difference is {result}.</div>
    </div>
  );
}
