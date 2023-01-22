import QrCodeReader from "react-qrcode-reader";
import { Link } from "react-router-dom";

import Scripts from "../scripts";

const QRCodeScanner = () => {

    const { qrData, onRead, loadingScan } = Scripts();

    return (
        <div className="card card-body shadow mx-auto col-sm-5 container mt-5">
            <Link className="btn btn-primary col-1" to={'/'}>
                <i className="fa-solid fa-arrow-left"></i>
            </Link>
            <br />
            <h3>QRCode Scanner</h3>
            <hr />
            <div className="mt-3">
                {
                    loadingScan === "isLoading" ?
                        <div className="text-center mt-3 mb-3">
                            <span className="spinner-grow spinner-grow-sm"></span>
                            <span className="spinner-grow spinner-grow-sm ms-2 me-2"></span>
                            <span className="spinner-grow spinner-grow-sm"></span>
                            <span className="spinner-grow spinner-grow-sm ms-2 me-2"></span>
                            <span className="spinner-grow spinner-grow-sm"></span>
                        </div>
                    :
                        <center>
                            <QrCodeReader delay={500} width={300} height={300} onRead={onRead} />
                        </center>
                }

                <textarea className="form-control" rows={4} value={qrData}></textarea>
            </div>
        </div>
    )
}

export default QRCodeScanner;