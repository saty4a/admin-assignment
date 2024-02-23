import react, { useState } from "react";
import Image from "next/image";
import { uploadImageDetails } from "@/apiCalls/postData";

const ImageUpload = () => {
  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("");
  const [message, setMessage] = useState("");

  const handleImage = (e) => {
    let reader = new FileReader();
    try {
      reader.readAsDataURL(e.target.files[0]);
      setImage(e.target.files[0]);
      setImageName(e.target.files[0].name);
    } catch (error) {
      console.log(error);
    }
  };

  const sendImage = () => {
    if (image !== "") {
      uploadImageDetails(image).then((response) => {
        if (response.data.success) {
          setImage("");
          setImageName("");
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
      <h3 className="text-center m-auto px-2 text-[#121417] text-3xl font-semibold w-[22rem] md:text-4xl md:w-3/4 lg:w-3/4 xl:w-1/2">
        Change the logo of sidebar
      </h3>
      <div className="flex flex-col gap-3 justify-center items-center mt-5">
        <input
          accept="image/*"
          className="text-black py-1 ps-2 h-[40px] border-2 rounded-xl w-2/3 md:w-2/5 lg:w-1/3"
          type="file"
          value={imageName !== "" ? null : ""}
          onChange={handleImage}
        ></input>
        <button
          type="submit"
          className="bg-indigo-500 px-5 text-white rounded-xl text-base w-1/3 md:w-1/5 xl:w-[9rem] py-2 border hover:border-black shadow hover:shadow-lg"
          onClick={sendImage}
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

export default ImageUpload;
