import { urls } from "@/config/urls";
import axios from "axios";

export async function deleteEmail(id) {
  try {
    const response = await axios
      .delete(`${urls.deleteEmail}/${id}`)
      .then((data) => {
        return data;
      });
    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}
