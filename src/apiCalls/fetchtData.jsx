import { urls } from "@/config/urls";
import axios from "axios";

export async function getEmails() {
  try {
    const response = await axios
      .get(urls.getEmails)
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
