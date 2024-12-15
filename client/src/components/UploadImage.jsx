import axios from "axios";
import toast from 'react-hot-toast';
import { useState } from "react";
import { useWeb3Context } from "../contexts/useWeb3Context";

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const { web3State } = useWeb3Context();
  const { selectedAccount, contractInstance } = web3State;

  const uploadImageHash = async (ipfsHash) => {
    const transaction = await contractInstance.uploadFile(
      selectedAccount,
      ipfsHash
    );
    
    await toast.promise(transaction.wait(),{
        loading:"Transaction is pending...",
        success:"Transaction is successful",
        error:"Transaction Failed"
      })
    };

  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const url = `http://localhost:3000/api/uploadImage`;
      const res = await axios.post(url, formData);

      toast.success("image uploaded successfully");
      await uploadImageHash(res.data.ipfsHash);
      
    } catch (error) {
        console.log(error);
        toast.error("image upload failed");
    }
  };

  return (
    <>
      <h2>Upload Image</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])}></input>
      <button onClick={handleImageUpload}>Upload Image</button>
    </>
  );
};

export default UploadImage;
