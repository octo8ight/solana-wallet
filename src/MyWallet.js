import React from 'react';
import {
    useConnection,
    useWallet,
    useAnchorWallet
} from "@solana/wallet-adapter-react";
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from "@solana/wallet-adapter-react-ui";
import '@solana/wallet-adapter-react-ui/styles.css'

export default function MyWallet() {

    const { connection } = useConnection();
    let walletAddress = "";

    const wallet = useWallet();

    return (
        <div>
            <div className='multi-wrapper'>
                <span className='button-wrapper'>
                    <WalletModalProvider>
                        <WalletMultiButton />
                    </WalletModalProvider>
                </span>
            </div>
        </div>
    )
}
