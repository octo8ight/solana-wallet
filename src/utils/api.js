import { Connection } from "@solana/web3.js";
import { Program, Provider, web3 } from "@project-serum/anchor";
import { programAddress, connectionsOptions, programAccount } from "./config";

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
    const idl = await Program.fetchIdl(programAddress, provider);
    return new Program(idl, programAddress, provider);
}

const createToken = async (wallet, network) => {
    const program = await getProgram(wallet, network);
    const tokenAccountKeypair = web3.Keypair.generate();
    const tokenAssociated = web3.Keypair.generate();
    console.log(program);
    const ctx = {
        mintToken: programAddress,
        signer: tokenAccountKeypair.publicKey,
        tokenAccount: programAccount,
        systemProgram: web3.SystemProgram.programId,
        tokenProgram: programAddress,
        associateTokenProgram: tokenAssociated.publicKey,
        rent: tokenAccountKeypair.publicKey
    };
    console.log(ctx);
    const tx = await program.rpc.createToken(9, 100, {
        accounts: ctx
    });
    console.log(tx);
}

export {
    createToken
}