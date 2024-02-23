import { deleteEmail } from "@/apiCalls/deleteData";
import { getEmails } from "@/apiCalls/fetchtData";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa6";

const Subscribers = () => {
  const [emailData, setEmailData] = useState("");
  useEffect(() => {
    allEmails();
  }, []);

  const allEmails = () => {
    getEmails().then((res) => {
      if (res.data.success) {
        setEmailData(res.data.emails);
      }
    });
  };

  const handleDelete = (id) => {
    deleteEmail(id).then((res) => {
      if (res.data.success) {
        allEmails();
      }
    });
  };

    return (
      <section>
        <h3 className="text-center mb-8 text-[#121417] text-3xl font-semibold md:text-4xl">
          All Subscribers
        </h3>
        {emailData !== "" ? <table className="m-auto">
          <thead>
            <tr>
              <th>No.</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {emailData.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.email}</td>
                <td className="">
                  <FaTrash
                    size={30}
                    className="delete cursor-pointer m-auto"
                    onClick={() => handleDelete(user._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>: ""}
      </section>
    );
};

export default Subscribers;
