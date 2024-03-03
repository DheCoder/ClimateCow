import React, { useState } from "react";

const InputComponent: React.FC = () => {
  // State to store input value
  const [inputValue, setInputValue] = useState<string>("");

  // Function to handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Do something with the input value, e.g., submit it to an API
    console.log("Input value:", inputValue);
    // Clear the input field after submission if needed
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Prompt for user */}
      <label htmlFor="inputField">Enter how minutes you showered: </label>
      {/* Input field */}
      <input
        type="text"
        id="showeredq"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type here..."
      />
      {/* Submit button */}
      <button type="submit">Submit</button>

      <br />

      {/* Prompt for user */}
      <label htmlFor="inputField">
        Enter how many hours your light has been on:{" "}
      </label>
      {/* Input field */}
      <input
        type="text"
        id="lightq"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type here..."
      />
      {/* Submit button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputComponent;
