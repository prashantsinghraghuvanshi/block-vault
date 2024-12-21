// import axios from "axios";
import { useWeb3Context } from "../contexts/useWeb3Context";

const GetImage = () => {
  const { web3State } = useWeb3Context();
  const { selectedAccount, contractInstance } = web3State;

  const getImageHashes = async () => {
    try {
      const ipfsHashes = await contractInstance.viewFiles(selectedAccount);
      return ipfsHashes;
    } catch (error) {
      console.error(error);
    }
  };

  const getImage = async () => {
    try {
      const ipfsHashes = await getImageHashes();
      const ipfsHashArray = Object.values(ipfsHashes);
      console.log(ipfsHashArray);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h2>Get Image</h2>
      <button onClick={getImage}>Get Image</button>
    </>
  );
};

export default GetImage;
