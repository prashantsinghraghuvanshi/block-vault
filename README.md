# BlockVault

BlockVault is a secure digital platform that enables users to register and upload data, including ID proofs, onto a blockchain for tamper-proof storage. The system ensures data integrity and confidentiality by leveraging the decentralized nature of blockchain, providing secure, transparent, and immutable records for both personal and institutional use.

---

## 🌐 GitHub Repository

[https://github.com/prashantsinghraghuvanshi/block-vault](https://github.com/prashantsinghraghuvanshi/block-vault)

---

## 🎯 Prerequisites

Before you begin, make sure you have the following installed:

- **Git**  
- **Node.js**  
- **Metamask wallet** (installed in your browser)  
- **Sepolia testnet ETH** (via faucet) in your user account  

---

## 🚀 Getting Started

Follow these steps to clone and run the project locally:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/prashantsinghraghuvanshi/block-vault.git
```

### 2️⃣ Navigate to the Project Directory

```bash
cd block-vault
```

### 3️⃣ Open Two Terminals

You'll need to run both the frontend and backend in separate terminals.

### 4️⃣ Run the Backend (Terminal 1)

In Terminal 1, follow these steps to start the backend:

```bash
cd server
npm install
nodemon start
```

### 5️⃣ Run the Frontend (Terminal 2)

In Terminal 2, follow these steps to start the frontend:

```bash
cd client
npm install
npm run dev
```

## 🌐 Accessing the App

Once both the frontend and backend are running, open your browser and go to:

```bash
http://localhost:3000
```
## 🛠 Troubleshooting

If you encounter any issues while setting up or running the app, here are some common troubleshooting steps:

### 1️⃣ Backend Server Not Starting:

- Ensure that all required dependencies are installed in the **server** directory. Run **npm install** again.

- Check if the **nodemon** command is installed globally. If not, run **npm install -g nodemon**.

### 2️⃣ Frontend Not Loading:

- Ensure that the React development server is running properly in the **client** directory.

- If you encounter issues with the frontend build, try clearing the cache with **npm run build** and then start the server again.

### 3️⃣ Metamask Issues:

- Make sure that Metamask is connected to the Sepolia testnet and you have enough ETH for transactions.

- Check the network settings and ensure your account is connected to the correct blockchain network.

### 4️⃣ Missing or Incorrect Environment Variables:

- Double-check that you have set up all necessary environment variables, such as API keys and blockchain settings, in both the **server** and **client** directories.

- Refer to the **.env.sample** files in both directories for a list of required environment variables.

### 5️⃣ CORS Issues:

- If you face any CORS (Cross-Origin Resource Sharing) issues, make sure that the backend is properly configured to allow requests from the frontend's development server.
## ✍️ Authors

- [@Prashant Singh](https://github.com/prashantsinghraghuvanshi/)

- [@Priyanshu Goyal](https://github.com/Priyanshu2804goyal)

- [@Piyush Gupta](https://github.com/)