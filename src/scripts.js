import { useState } from "react";

const Scripts = () => {
    const [qr, setQr] = useState('yourname-here');

    const downloadQR = () => {
        const qrCodeURL = document.getElementById('qrcodeimage');
        const dataURL   = qrCodeURL.toDataURL("image/png").replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = dataURL;
        downloadLink.download = "myqr.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    // Reader
    const [loadingScan, setLoadingScan] = useState("");
    const [qrData, setQrData] = useState("No Result");

    const handleScan = data => {
        if (data) {
            setLoadingScan("isLoading")

            setTimeout(() => {
                setLoadingScan("")
                setQrData(data)
            }, 3000)
        }
    }

    const handleError = err => {
        console.log(err.message)
    }

    return {
        qr, setQr, downloadQR,
        qrData, handleScan, handleError, loadingScan
    }
}

export default Scripts;