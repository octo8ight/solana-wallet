// React Stuff
import React, { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";


// My Deps
import Intro from './Intro';
import Editor from './Editor';
import {createToken} from "../utils/api";


const Arena = ({ network }) => {
    const wallet = useWallet();

    const submitJoke = async () => {
        await createToken(wallet, network)
    }

    return (
        <div className="jokearena-container">
            <Intro wallet={wallet}/>

            <Editor wallet={wallet} submitJoke={submitJoke} />
        </div>
    )
}

export default Arena;
