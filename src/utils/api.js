import { Connection } from "@solana/web3.js";
import { Program, Provider, web3 } from "@project-serum/anchor";
import { programAddress, connectionsOptions } from "./config";

const getConnectionProvider = async (wallet, network) => {
    const connection = new Connection(
        network,
        connectionsOptions.preflightCommitment
    );
    const provider = new Provider(
        connection,
        wallet,
        connectionsOptions.preflightCommitment
    );
    return provider;
}

const getProgram = async (wallet, network) => {
    const provider = await getConnectionProvider(wallet, network);
    console.log(provider);
    const idl = await Program.fetchIdl(programAddress, provider);
    console.log(idl);
    return new Program(idl, programAddress, provider);
}

export {
    getConnectionProvider,
    getProgram
}