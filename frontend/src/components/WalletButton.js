import { ConnectButton, ErrorCode } from "@suiet/wallet-kit";
import "@suiet/wallet-kit/style.css";
import "./suiet-wallet-kit-custom.css";

function WalletButton() {
    return (
        <ConnectButton
            // The BaseError instance has properties like {code, message, details}
            // for developers to further customize their error handling.
            onConnectError={(err) => {
                if (err.code === ErrorCode.WALLET__CONNECT_ERROR__USER_REJECTED) {
                    console.warn('user rejected the connection to ' + err.details?.wallet);
                } else {
                    console.warn('unknown connect error: ', err);
                }
            }}
        >Connect Your Wallet</ConnectButton>
    );
}

export default WalletButton;