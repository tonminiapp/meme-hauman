import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import { WalletConnectProvider } from './providers/WalletProvider';

export default function App() {
  return (
    <Router>
      <WalletConnectProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </WalletConnectProvider>
    </Router>
  );
}
