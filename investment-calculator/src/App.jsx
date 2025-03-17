import { useState } from "react";

import Header from "./components/Header";
import Input from "./components/Input";
import Output from "./components/Output";

const INITIAL_INPUT = {
  initialInvestment: 15000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [input, setInput] = useState(INITIAL_INPUT);

  function handleChange(newValue, inputIdentifier) {
    setInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  const inputIsValid = input.duration >= 1;

  return (
    <div id="calculator">
      <Header />
      <Input handleChange={handleChange} input={input} />
      {!inputIsValid && (
        <p className="error">Please enter a duration greater than zero</p>
      )}
      {inputIsValid && <Output input={input} />}
    </div>
  );
}

export default App;
