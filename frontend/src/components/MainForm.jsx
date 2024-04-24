import React, { useState, useEffect } from "react";
import Select from "react-select";
import { removeStopwords } from "stopword";

const MainForm = () => {
  const [textInput, setTextInput] = useState("");
  const [classNum, setClassNum] = useState("");
  const [facetFormula, setFacetFormula] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingSecond, setLoadingSecond] = useState(false);

  const [selectInput, setSelectInput] = useState(null);
  const [selectInputSecond, setSelectInputSecond] = useState(null);

  const [options, setOptions] = useState([]);
  const [optionsSecond, setOptionsSecond] = useState([]);

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSelectInputChange = (selectedOption) => {
    console.log(selectedOption, "first dropdown selection");

    setSelectInput(selectedOption);
  };
  const handleSelectInputSecondChange = (selectedOption) => {
    console.log(selectedOption, "second dropdown selection");
    setSelectInputSecond(selectedOption);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Text Input:", removeStopwords(textInput.split(" ")));
    console.log("Select Input:", selectInput);
  };

  const getTitleToMainSuject = async () => {
    if (selectInput === null) {
      return;
    }
    try {
      setLoadingSecond(true);
      const response = await fetch(
        `https://colon-classification.onrender.com/titles_to_main_class_mapper/${selectInput?.value}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setOptionsSecond(
        data.data.map((item) => ({ value: item.id, label: item.subject }))
      );
      setLoadingSecond(false);
    } catch (error) {
      console.log(error);
      setLoadingSecond(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
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
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    getTitleToMainSuject();
  }, [selectInput]);

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
            Select Subject
          </label>
          <Select
            id="select"
            options={options}
            value={selectInput}
            onChange={handleSelectInputChange}
            isLoading={loading}
          />
        </div>
        {selectInput !== null && (
          <div className="mb-4">
            <label
              htmlFor="select"
              className="block text-gray-700 font-bold mb-2"
            >
              Title to main class
            </label>
            <Select
              options={optionsSecond}
              value={selectInputSecond}
              onChange={handleSelectInputSecondChange}
              isLoading={loadingSecond}
            />
          </div>
        )}
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
