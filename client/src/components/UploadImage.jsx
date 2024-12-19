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
    <div className="upload-container">
      <h2>Upload Image with Web3 Security</h2>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        disabled={loading}
      ></input>
      {file ? (
        <div>
          <button onClick={handleImageUpload} disabled={loading || !file}>
            <ImageUp />
          </button>
        </div>
      ) : (
        <p>Choose a file to upload.</p>
      )}
    </div>
  );
};

export default UploadImage;
