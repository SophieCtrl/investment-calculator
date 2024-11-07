// components: header, user input, table
// store user input
// derive investment results using provided utility functions
// display results in an HTML table
// display info message if input is invalid
import { useState } from "react";
import UserInput from "./components/UserInput";

const INITIAL_INPUT = {
  "Initial Investment": 15000,
  "Annual Investment": 900,
  "Expected Return": 5.5,
  "Investment Duration": 10,
};
const INPUT_LABELS = [
  "Initial Investment",
  "Annual Investment",
  "Expected Return",
  "Investment Duration",
];

function App() {
  const [userInput, setUserInput] = useState(INITIAL_INPUT);

  const handleInput = (label, newValue) => {
    setUserInput((curUserInput) => {
      return {
        ...curUserInput,
        [label]: newValue,
      };
    });
  };

  return (
    <>
      <div className="input-group">
        {INPUT_LABELS.map((label) => {
          return (
            <UserInput
              key={label}
              labelName={label}
              initialValue={INITIAL_INPUT[label]}
              onInputChange={handleInput}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
