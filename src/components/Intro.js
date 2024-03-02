import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';



const Intro = ({ wallet }) => {
    return (
        <div className="intro-container">
            <WalletMultiButton className={"btn-wallet"} />
            { !wallet.connected &&
                <div className={"help"}>
                    <h3>Please start by connecting your Wallet On DevNet :)</h3>
                    <p>
                        No Wallet? <a className={"txt-white"} href="https://phantom.app">Get One Here</a>
                    </p>
                </div>
            }
        </div>
    )
}

export default Intro;
