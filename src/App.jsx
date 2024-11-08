import { useState } from "react";
import UserInput from "./components/UserInput";
import ResultsTable from "./components/ResultsTable";

const INITIAL_INPUT = {
  initialInvestment: 15000,
  annualInvestment: 900,
  expectedReturn: 5.6,
  duration: 10,
};
const INPUT_LABELS = [
  "Initial Investment",
  "Annual Investment",
  "Expected Return",
  "Investment Duration",
];

function App() {
  const [userInput, setUserInput] = useState(INITIAL_INPUT);
  const inputIsValid = userInput.duration >= 1;

  const handleInput = (label, newValue) => {
    setUserInput((curUserInput) => {
      return {
        ...curUserInput,
        [label]: +newValue,
      };
    });
  };

  return (
    <>
      <div className="input-group">
        {INPUT_LABELS.map((label, index) => {
          return (
            <UserInput
              labelName={label}
              labelKey={Object.keys(INITIAL_INPUT)[index]}
              initialValue={INITIAL_INPUT[Object.keys(INITIAL_INPUT)[index]]}
              onInputChange={handleInput}
              key={label}
            />
          );
        })}
      </div>
      {inputIsValid && <ResultsTable userInput={userInput} />}
      {!inputIsValid && <p className="center">Please enter a duration.</p>}
    </>
  );
}

export default App;
