import logo from './logo.svg';
import './App.css';
import React, { useMemo, useEffect, useState } from 'react';

import {
  ConnectionProvider,
  WalletProvider
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
  SkyWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { clusterApiUrl, Connection, PublicKey, Transaction } from "@solana/web3.js";
import { createTransferCheckedInstruction, getAssociatedTokenAddress, getMint } from "@solana/spl-token";
import '@solana/wallet-adapter-react-ui/styles.css';
import { useWallet } from "@solana/wallet-adapter-react";
import { createToken } from "./utils/api";
import Arena from './components/Arena';

function App() {
  const tokenAddress = "Fi8Q7AV8Nr8fJy27j4QpnHe3iJCHHsPcYQ1TSUoi8A1J";
  
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const connection = new Connection(endpoint);
  
  const wallets = [
    new GlowWalletAdapter(),
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter(),
    new TorusWalletAdapter(),
    new SkyWalletAdapter(),
  ];
  const wallet = useWallet();

  const handleCreateToken = async () => {
    await createToken(wallet, endpoint);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">🖼 Solana GIF Friends</p> 
          <p className="sub-text">
            View your beautiful GIFs on Solana! 🪐
          </p>
        </div>
        <div className="footer-container">
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <Arena network={endpoint}/>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
