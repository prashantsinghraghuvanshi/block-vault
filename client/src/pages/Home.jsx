import { useWeb3Context } from "../contexts/useWeb3Context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import UploadImage from "../components/UploadImage";
import GetImage from "../components/GetImage";
import "./Home.css";

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
      <h1>Block Vault - Home</h1>
      <UploadImage />
      <GetImage />
    </>
  );
};

export default Home;
