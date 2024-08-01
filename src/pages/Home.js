import React from "react";
import { toast } from "react-toastify";
import { useWallet } from "@solana/wallet-adapter-react";

export default function Home() {
  const { select, wallets, publicKey, disconnect } = useWallet();

  const handleWalletConnect = () => {
    if (!publicKey) {
      const installedWallets = wallets.filter(
        (wallet) => wallet.readyState === "Installed"
      );
      if (installedWallets.length <= 0) {
        toast.error("Phantom wallet is not installed yet.");
        return;
      }
      select(wallets[0].adapter.name);
      toast.success("Wallet connected successfully.");
    } else {
      disconnect();
    }
  };

  return (
    <button
      className=""
      onClick={handleWalletConnect}
    >
      {!publicKey
        ? "CONNECT WALLET"
        : publicKey.toBase58().slice(0, 6) +
        " ... " +
        publicKey.toBase58().slice(-6)}
    </button>
  );
}