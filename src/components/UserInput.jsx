import { useState } from "react";

const UserInput = ({ labelName, initialValue, onInputChange }) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleInput = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onInputChange(labelName, newValue);
  };

  return (
    <div id="user-input">
      <label>{labelName}</label>
      <input type="number" value={inputValue} onChange={handleInput} required />
    </div>
  );
};

export default UserInput;
