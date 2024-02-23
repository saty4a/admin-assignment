import { addNewText } from "@/apiCalls/postData";
import React, { useState } from "react";

const ChangeText = () => {
  const [inputText, setInputText] = useState("");
  const [message, setMessage] = useState("");

  const sendText = () => {
    if (inputText !== "") {
      addNewText("header", inputText).then((response) => {
        if (response.data.success) {
          setInputText("");
          setMessage(response.data.message);
          setTimeout(() => {
            setMessage("");
          }, 1500);
        }
      });
    } else {
      setMessage("all fields are required");
      setTimeout(() => {
        setMessage("");
      }, 1500);
    }
  };

  return (
    <section className="my-[5rem]">
      <h3 className="text-center text-[#121417] text-3xl font-semibold md:text-4xl">
        change the text of header
      </h3>
      <div className="flex justify-center mt-10">
        <input
          type="text"
          placeholder="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="text-black ps-2 h-[50px] border-2 border-e-0 rounded-s-xl w-3/5 md:w-2/5"
        ></input>
        <button
          type="submit"
          className="bg-indigo-500 px-5 text-white rounded-e-xl text-base border hover:border-black shadow hover:shadow-lg"
          onClick={sendText}
        >
          Submit
        </button>
      </div>
      {message !== "" ? (
        <p className="text-center mt-3 text-xl font-medium">{message}</p>
      ) : (
        ""
      )}
    </section>
  );
};

export default ChangeText;
