import { useWeb3Context } from "../contexts/useWeb3Context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import UploadImage from "../components/UploadImage";
import GetImage from "../components/GetImage";

const Home = () => {
  const navigateTo = useNavigate();
  const { web3State } = useWeb3Context();
  const { selectedAccount } = web3State;

  useEffect(() => {
    if (!selectedAccount) {
      navigateTo("/");
    }
  }, [selectedAccount, navigateTo]);

  return (
    <>
      <h1 className="text-4xl text-lime-100 font-semibold text-center mt-8 mb-4">
        Block Vault - Home
      </h1>

      <div className="text-lime-100 min-h-screen flex flex-col justify-center items-center mb-10">
        <UploadImage />
        <GetImage />
      </div>
    </>
  );
};

export default Home;
