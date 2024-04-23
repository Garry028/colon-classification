import React, { useState, useEffect } from "react";
import Select from "react-select";
import { removeStopwords } from "stopword";

const MainForm = () => {
  const [textInput, setTextInput] = useState("");

  const [selectInput, setSelectInput] = useState(null);
  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSelectInputChange = (selectedOption) => {
    setSelectInput(selectedOption);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Text Input:", removeStopwords(textInput.split(" ")));
    console.log("Select Input:", selectInput);
  };

  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://colon-classification.onrender.com/subjects/"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setOptions(
          data.data.map((item) => ({ value: item.id, label: item.subject }))
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg shadow-lg">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="text" className="block text-gray-700 font-bold mb-2">
            Title Input
          </label>
          <input
            type="text"
            id="text"
            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            value={textInput}
            onChange={handleTextInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="select"
            className="block text-gray-700 font-bold mb-2"
          >
            Select Input
          </label>
          <Select
            id="select"
            options={options}
            value={selectInput}
            onChange={handleSelectInputChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MainForm;
