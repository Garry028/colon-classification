import React, { useState, useEffect } from "react";
import Select from "react-select";
import { removeStopwords } from "stopword";

const MainForm = () => {
  // const [textInput, setTextInput] = useState("");
  const [classNum, setClassNum] = useState("");
  const [facetFormula, setFacetFormula] = useState("");
  const [titles, setTitles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingSecond, setLoadingSecond] = useState(false);
  const [loadingThird, setLoadingThird] = useState(false);
  const [firstData, setFirstData] = useState(null);
  const [secondData, setSecondData] = useState(null);
  const [thirdData, setThirdData] = useState(null);
  const [inputWithoutStopWords, setInputWithoutStopWords] = useState([]);
  const [selectInput, setSelectInput] = useState(null);
  const [selectInputSecond, setSelectInputSecond] = useState(null);
  const [options, setOptions] = useState([]);
  const [optionsSecond, setOptionsSecond] = useState([]);
  const [optionsThird, setOptionsThird] = useState([]);
  const [mainClass, setMainClass] = useState(null);
  const handleTextInputChange = (event) => {
    setInputWithoutStopWords(removeStopwords(event.target.value.split(" ")));
  };

  const getTitleToMainSuject = async (text) => {
    try {
      // setLoadingSecond(true);
      const response = await fetch(
        `https://colon-classification.onrender.com/titles_to_main_class_mapper/${text}`
      );

      const data = await response.json();
      setSecondData(data.data);
      setOptionsSecond(
        data.data.map((item) => ({ value: item.id, label: item.subject }))
      );
      // setLoadingSecond(false);
    } catch (error) {
      console.log(error);
      // setLoadingSecond(false);
    }
  };
  const fetchDataThird = async (text) => {
    try {
      // setLoadingThird(true);
      const response = await fetch(
        `https://colon-classification.onrender.com/titles/${text}`
      );

      const data = await response.json();
      setThirdData(data.data);
      setOptionsThird(
        data.data.map((item) => ({ value: item.id, label: item.subject }))
      );
      // setLoadingThird(false);
    } catch (error) {
      console.log(error);
      // setLoadingThird(false);
    }
  };

  const handleSelectInputChange = async (selectedOption) => {
    const temp = firstData;
    const tempData = temp.find((item) => item.id === selectedOption.value);
    setClassNum(tempData.classNumber);
    setSelectInput(selectedOption);
    await getTitleToMainSuject(selectedOption.value);
  };
  const handleSelectInputSecondChange = async (selectedOption) => {
    const temp = secondData;
    const tempData = temp.find((item) => item.id === selectedOption.value);
    setClassNum((prev) => prev + tempData.classNumber);
    setFacetFormula(tempData.facetFormula);
    setSelectInputSecond(selectedOption);
    await fetchDataThird(selectedOption.value);
  };
  const handleSelectInputThirdChange = (selectedOption, index) => {
    const temp = thirdData;
    const tempData = temp.find((item) => item.id === selectedOption.value);
    setTitles((prev) => [
      ...prev.slice(0, index),
      {
        subject: tempData.subject,
        classNumber: tempData.classNumber,
        foci: tempData.foci,
      },
      ...prev.slice(index + 1),
    ]);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      classNumber: classNum,
      facetFormula: facetFormula,
      title: titles,
    };
    try {
      const response = await fetch(
        "https://colon-classification.onrender.com/classification",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const data = await response.json();
      setMainClass(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://colon-classification.onrender.com/subjects/"
        );

        const data = await response.json();
        setFirstData(data.data);
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
  return (
    <>
      <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="text"
              className="block text-gray-700 font-bold mb-2"
            >
              Title Input
            </label>
            <input
              type="text"
              id="text"
              className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              onChange={handleTextInputChange}
              onBlur={handleTextInputChange}
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

          {selectInputSecond &&
            inputWithoutStopWords.map((word, index) => (
              <div key={index} className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  {word}
                </label>
                <Select
                  options={optionsThird}
                  onChange={(e) => handleSelectInputThirdChange(e, index)}
                  isLoading={loadingThird}
                />
              </div>
            ))}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
      {mainClass && (
        <div className="flex gap-x-2 p-4 rounded-lg shadow-lg border mt-10  max-w-md mx-auto">
          <span className="text-2xl  font-bold">Class Number: </span>
          <h1 className="text-2xl  font-bold">{mainClass}</h1>
        </div>
      )}
    </>
  );
};

export default MainForm;
