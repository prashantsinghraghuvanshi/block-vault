import axios from "axios";
import { useEffect, useState } from "react";
import { useWeb3Context } from "../contexts/useWeb3Context";
import toast from "react-hot-toast";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

const GetImage = () => {
  const { web3State } = useWeb3Context();
  const { selectedAccount, contractInstance } = web3State;
  const [currentPage, setCurrentPage] = useState(1);
  const [imagePerPage] = useState(2);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
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
          setLoading(true);
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
          toast.error("Error fetching images");
          console.error("Error fetching images:", error);
          setImages([]);
        } finally {
          setLoading(false);
        }
      };
      contractInstance && getImage();
    } catch (error) {
      toast.error("Error in mounting component");
      console.error("Error in mounting component:", error);
    }
  }, [contractInstance, currentPage, imagePerPage, selectedAccount]);

  const pagination = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <h2 className="text-3xl font-sans text-center mb-6">
        Fetching images through server!
      </h2>
      {!loading ? (
        Array.isArray(images) && images.length > 0 ? (
          <div className="flex justify-start md:justify-center items-center w-full  overflow-x-auto">
            {images.map((imgData, index) => (
              <img
                key={index}
                src={`data:image/jpeg;base64,${imgData}`}
                alt={`Image ${index + 1}`}
                className="h-[280px] object-cover m-4"
              />
            ))}
          </div>
        ) : (
          <p>No images found</p>
        )
      ) : (
        <p>Loading...</p>
      )}
      <div className="w-10 h-15 flex justify-center items-center gap-4">
        <button
          onClick={() => pagination(currentPage - 1)}
          disabled={currentPage === 1 || loading}
        >
          <CircleArrowLeft className="w-8 h-8 opacity-80" />
        </button>

        <span className="font-bold text-[24px]">{currentPage}</span>

        <button onClick={() => pagination(currentPage + 1)} disabled={loading}>
          <CircleArrowRight className="w-8 h-8 opacity-80" />
        </button>
      </div>
    </>
  );
};

export default GetImage;
