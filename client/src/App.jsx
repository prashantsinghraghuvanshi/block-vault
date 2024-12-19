import Web3Provider from "./contexts/web3Provider";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";

export default function App() {
  return (
    <>
      <Web3Provider>
          <RouterProvider router={routes} />
      </Web3Provider>
    </>
  );
}
