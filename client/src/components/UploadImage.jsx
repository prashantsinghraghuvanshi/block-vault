import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { useWeb3Context } from "../contexts/useWeb3Context";
import { ImageUp } from "lucide-react";

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const { web3State } = useWeb3Context();
  const { selectedAccount, contractInstance } = web3State;

  const uploadImageHash = async (ipfsHash) => {
    await toast.promise(
      contractInstance.uploadFile(selectedAccount, ipfsHash),
      {
        loading: "Transaction is pending...",
        success: "Transaction is successful",
        error: "Transaction Failed",
      }
    );
  };

  const handleImageUpload = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", file);
      const url = `http://localhost:3000/api/uploadImage`;

      const token=localStorage.getItem("token");
      const config={
        headers:{
          "access-token": token
        }
      }
      
      const res = await axios.post(url, formData, config);

      toast.success("image uploaded successfully");
      await uploadImageHash(res.data.ipfsHash);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("image upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-container p-8 max-w-2xl w-full mx-auto">
      <h2 className="text-3xl font-sans text-center mb-6">
        Upload Image with Web3 Security
      </h2>
      <div className="flex flex-col items-center">
        <input
          type="file"
          className="mb-4 p-2 border-2 border-gray-300 rounded-md"
          onChange={(e) => setFile(e.target.files[0])}
          disabled={loading}
        />
        {file ? (
          <button
            className="bg-red-600 text-white flex flex-row justify-between font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-red-500 transition duration-300"
            onClick={handleImageUpload}
            disabled={loading || !file}
          >
            <ImageUp />
            <p className="ml-4">upload Image</p>
          </button>
        ) : (
          <p className="text-yellow-500 mt-4">Choose a file to upload.</p>
        )}
      </div>
    </div>
  );
};

export default UploadImage;
