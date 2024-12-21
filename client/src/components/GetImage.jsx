import axios from "axios";
import { useState } from "react";
import { useWeb3Context } from "../contexts/useWeb3Context";

const GetImage = () => {
  const { web3State } = useWeb3Context();
  const { selectedAccount, contractInstance } = web3State;
  const [currentPage, setCurrentPage] = useState(1);
  const [imagePerPage] = useState(2);
  const [images, setImages] = useState([]);

  const getImageHashes = async () => {
    try {
      const ipfsHashes = await contractInstance.viewFiles(selectedAccount);
      return ipfsHashes;
    } catch (error) {
      console.error("Error fetching image hashes:", error);
      return [];
    }
  };

  const getImage = async () => {
    try {
      const ipfsHashes = await getImageHashes();
      const ipfsHashArray = Object.values(ipfsHashes);
      const url = `http://localhost:3000/api/getImage?page=${currentPage}&limit=${imagePerPage}`;
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "access-token": token,
        },
      };

      const res = await axios.post(url, ipfsHashArray, config);
      const imagesData = res.data?.decryptedImageArr || [];
      setImages(imagesData);
    } catch (error) {
      console.error("Error fetching images:", error);
      setImages([]);
    }
  };

  return (
    <>
      <h2>Get Image</h2>
      {Array.isArray(images) && images.length > 0 ? (
        images.map((imgData, index) => (
          <img
            key={index}
            src={`data:image/jpeg;base64,${imgData}`}
            alt={`Image ${index + 1}`}
          />
        ))
      ) : (
        <p>No images found</p>
      )}
      <button onClick={getImage}>Get Image</button>
    </>
  );
};

export default GetImage;
