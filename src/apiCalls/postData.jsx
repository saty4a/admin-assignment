import { urls } from "@/config/urls";
import axios from "axios";

export async function uploadImageDetails(image) {
  const formData = new FormData();
  formData.append("image", image);
  console.log(formData);

  try {
    const response = await axios
      .post(urls.uploadImage, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((response) => {
        return response;
      });
    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function addNewText(place, newText) {
  const body = {
    place: place,
    newText: newText,
  };
  try {
    const response = await axios
      ({method: "post", url: urls.addText, data: body})
      .then((response) => {
        return response;
      });
    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}
