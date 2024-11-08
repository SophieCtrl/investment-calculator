import { useState } from "react";

const UserInput = ({ labelName, labelKey, initialValue, onInputChange }) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleInput = (event) => {
    event.target.value = event.target.value.replace(/^0+/, "");
    const newValue = event.target.value;

    setInputValue(newValue);
    onInputChange(labelKey, newValue);
  };

  return (
    <div id="user-input">
      <label>{labelName}</label>
      <input type="number" value={inputValue} onChange={handleInput} required />
    </div>
  );
};

export default UserInput;
