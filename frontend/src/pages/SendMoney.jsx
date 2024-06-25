import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Backend_url } from "../conf";

export const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState(0);
  const [buttonText, setButtonText] = useState("Initiate Transfer");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate=useNavigate();

  const handleTransfer = () => {
    setButtonText("Initiating...");
    setErrorMessage(""); 

    axios
      .post(
        `${Backend_url}/api/v1/account/transfer`,
        {
          to: id,
          amount,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then(() => {
        alert("Money Transferred");
        setButtonText("Initiate Transfer");
        navigate(`/dashboard`)
      })
      .catch((error) => {
        console.error("Error transferring money:", error.response);

        if (error.response && error.response.data && error.response.data.message) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage("Error transferring money. Please try again.");
        }
        
        setButtonText("Initiate Transfer");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Send Money</h2>
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center">
            <span className="text-3xl text-white">{name[0].toUpperCase()}</span>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-600" htmlFor="amount">
              Amount (in Rs)
            </label>
            <input
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
              id="amount"
              placeholder="Enter amount"
            />
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}
          <button
            onClick={handleTransfer}
            className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};
