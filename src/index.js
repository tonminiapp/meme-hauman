import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Buffer } from "buffer";
window.Buffer = Buffer;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer theme="dark" position="top-center" pauseOnFocusLoss={false} autoClose={2500} hideProgressBar toastClassName="bg-toast font-exo" closeOnClick />
  </React.StrictMode>
);
