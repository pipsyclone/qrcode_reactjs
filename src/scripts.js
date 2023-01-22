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

    const onRead = (qrcode) => {
        if (qrcode) {
            setLoadingScan("isLoading")
            setTimeout(() => {
                setLoadingScan("")
                setQrData(qrcode.data)
            }, 3000)
        }else {
            console.log("Tidak Terdeteksi!")
        }
    }

    return {
        qr, setQr, downloadQR,
        qrData, onRead, loadingScan
    }
}

export default Scripts;