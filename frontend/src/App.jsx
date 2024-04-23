// import { useState } from "react";
// ("p e 2p2 2p");

// const initialFormData = {
//   title: [
//     {
//       foci: "P",
//       words: "",
//     },
//   ],
//   subTitle: "",
//   author: "",
//   publisher: "",
//   yop: "",
//   pop: "",
//   editor: "",
//   translator: "",
//   illustrator: "",
//   compiler: "",
//   extractor: "",
//   pageNos: "",
//   isbn: "",
//   size: "",
//   subject: "",
//   format: "",
//   yob: "",
// };

// const categories = ["P", "E", "2P2", "2P"];

// const BookForm = () => {
//   const [formData, setFormData] = useState(initialFormData);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [serverResponse, setServerResponse] = useState({});

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Construct the request body from formData
//     const requestBody = {
//       ...formData,
//       title: formData.title.map((titleField) => ({
//         foci: titleField.foci,
//         words: titleField.words,
//       })),
//     };
//     console.log(requestBody);
//     // Send a POST request to the API
//     fetch("http://localhost:8080/colon-classification", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(requestBody),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Server error");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         // Handle the API response here
//         console.log(data);

//         // Display the modal with the API response
//         // You can use state to control the modal visibility
//         setServerResponse(data);
//         setModalVisible(true);
//       })
//       .catch((error) => {
//         console.error(error);
//         // Handle errors here
//       });
//   };

//   const closeModal = () => {
//     // Close the modal
//     setModalVisible(false);
//   };

//   const handleTitleChange = (e, index, field) => {
//     const { name, value } = e.target;
//     const updatedTitle = [...formData.title];
//     if (field === "foci" || field === "words") {
//       updatedTitle[index][field] = value;
//       setFormData({
//         ...formData,
//         title: updatedTitle,
//       });
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const addTitleWord = () => {
//     const updatedTitle = [...formData.title, { foci: "P", words: "" }];
//     setFormData({ ...formData, title: updatedTitle });
//   };

//   const removeTitleWord = (index) => {
//     const updatedTitle = [...formData.title];
//     updatedTitle.splice(index, 1);
//     setFormData({ ...formData, title: updatedTitle });
//   };
//   return (
//     <>
//       <div className="w-full max-w-3xl mx-auto mb-5 bg-white shadow-md rounded px-8 pt-6 pb-8">
//         <h2 className="text-2xl mb-4">Book Information</h2>
//         {formData.title.map((word, index) => (
//           <div key={index} className="mb-4">
//             <input
//               type="text"
//               name="words"
//               placeholder="Title Word"
//               value={word.words}
//               onChange={(e) => handleTitleChange(e, index, "words")}
//               className="mr-2 border rounded py-2 px-3"
//             />
//             <select
//               name="foci"
//               value={word.foci}
//               onChange={(e) => handleTitleChange(e, index, "foci")}
//               className="border rounded py-2 px-3"
//             >
//               <option value="" disabled>
//                 Select Category
//               </option>
//               {categories.map((category) => (
//                 <option key={category} value={category}>
//                   {category}
//                 </option>
//               ))}
//             </select>
//             {index > 0 && (
//               <button
//                 type="button"
//                 onClick={() => removeTitleWord(index)}
//                 className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
//               >
//                 Remove
//               </button>
//             )}
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={addTitleWord}
//           className="px-2 py-1 bg-green-500 text-white rounded"
//         >
//           Add Title Word
//         </button>
//       </div>
//       <div className="w-full max-w-3xl mx-auto">
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
//         >
//           {/* Input fields */}
//           <div className="grid grid-cols-3 gap-5">
//             <div className="mb-4">
//               <label
//                 htmlFor="subTitle"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Book Subtitle
//               </label>
//               <input
//                 type="text"
//                 id="subTitle"
//                 name="subTitle"
//                 value={formData.subTitle}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Book Subtitle"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="subject"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Subject
//               </label>
//               <input
//                 type="text"
//                 id="subject"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Subject"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="author"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Author
//               </label>
//               <input
//                 type="text"
//                 id="author"
//                 name="author"
//                 value={formData.author}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Author"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="publisher"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Publisher
//               </label>
//               <input
//                 type="text"
//                 id="publisher"
//                 name="publisher"
//                 value={formData.publisher}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Publisher"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="yop"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Year of Publication
//               </label>
//               <input
//                 type="number"
//                 id="yop"
//                 name="yop"
//                 value={formData.yop}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Year of Publication"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="pop"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Place of Publication
//               </label>
//               <input
//                 type="number"
//                 id="pop"
//                 name="pop"
//                 value={formData.pop}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Place of Publication"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="editor"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Editor
//               </label>
//               <input
//                 type="text"
//                 id="editor"
//                 name="editor"
//                 value={formData.editor}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Editor"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="translator"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Translator
//               </label>
//               <input
//                 type="text"
//                 id="translator"
//                 name="translator"
//                 value={formData.translator}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Translator"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="illustrator"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Illustrator
//               </label>
//               <input
//                 type="text"
//                 id="illustrator"
//                 name="illustrator"
//                 value={formData.illustrator}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Illustrator"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="compiler"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Compiler
//               </label>
//               <input
//                 type="text"
//                 id="compiler"
//                 name="compiler"
//                 value={formData.compiler}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Compiler"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="extractor"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Extractor
//               </label>
//               <input
//                 type="text"
//                 id="extractor"
//                 name="extractor"
//                 value={formData.extractor}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Extractor"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="pageNos"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Number of Pages
//               </label>
//               <input
//                 type="number"
//                 id="pageNos"
//                 name="pageNos"
//                 value={formData.pageNos}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Number of Pages"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="isbn"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 ISBN Number
//               </label>
//               <input
//                 type="text"
//                 id="isbn"
//                 name="isbn"
//                 value={formData.isbn}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="ISBN Number"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="bookSize"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Book Size
//               </label>
//               <input
//                 type="text"
//                 id="bookSize"
//                 name="bookSize"
//                 value={formData.bookSize}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Book Size"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="bookFormat"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Book Format
//               </label>
//               <input
//                 type="text"
//                 id="bookFormat"
//                 name="bookFormat"
//                 value={formData.bookFormat}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Book Format"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="yob"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Author Year of Birth
//               </label>
//               <input
//                 type="number"
//                 id="yob"
//                 name="yob"
//                 value={formData.yob}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Author Year of Birth"
//               />
//             </div>
//             <div className="flex items-center justify-center">
//               <button
//                 type="submit"
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </form>
//         {/* Modal */}
//         {modalVisible && (
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div
//               className="modal-overlay absolute inset-0 bg-gray-800 opacity-50"
//               onClick={closeModal}
//             ></div>
//             <div className="modal-container bg-white w-96 mx-auto rounded shadow-lg z-50">
//               <div className="modal-content py-4 text-left px-6">
//                 <h1 className="text-2xl mb-4">Colon Classification</h1>
//                 <pre>Class Number: {serverResponse.classNumber} </pre>
//                 <pre>Ascension No: {serverResponse.ascensionNumber} </pre>
//                 <pre>Book No: {serverResponse.bookNumber} </pre>
//                 <div className="mt-4">
//                   <button
//                     className="modal-close px-4 py-2 bg-gray-500 text-white rounded"
//                     onClick={closeModal}
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default BookForm;

import React from "react";
import MainForm from "./components/MainForm";
const App = () => {
  return (
    <div>
      <MainForm />
    </div>
  );
};

export default App;
