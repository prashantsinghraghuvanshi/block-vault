import { useWeb3Context } from "../contexts/useWeb3Context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
    const navigateTo=useNavigate();
    const {web3State}=useWeb3Context();
    const {selectedAccount} = web3State;

    useEffect(()=>{
        if(!selectedAccount){
            navigateTo("/");
        }
    },[selectedAccount, navigateTo]);

    return (
        <h1>
            Home Page
        </h1>
    );
}
 
export default Home;