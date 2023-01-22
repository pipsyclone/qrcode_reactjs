import QRCode from "qrcode.react";
import { Link } from "react-router-dom";

import Scripts from "../scripts";

const QRCodeGenerator = () => {

    const { 
        qr, setQr, downloadQR
    } = Scripts();

    return (
        <div className="card card-body shadow mx-auto mt-5 col-sm-5">
            <Link className="btn btn-primary col-1" to={'/'}>
                <i className="fa-solid fa-arrow-left"></i>
            </Link>
            <br />
            <h3>QRCode Generator</h3>
            <hr />
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="text" placeholder="example: yourname" value={qr} onChange={(e) => setQr(e.target.value)} />
                <label htmlFor="text">Write Some Text</label>
            </div>

            <div className="mt-3">
                {
                    qr ?
                        <div className="text-center">
                            <QRCode
                                id="qrcodeimage"
                                value={qr} 
                                size={220}
                                level={'H'}
                                includeMargin={true}
                            />
                            <br />
                            <button type="button" className="btn btn-primary w-25 mt-3" onClick={downloadQR}>Download QR</button>
                        </div>
                    :
                        <p>No Code Preview</p>
                }
            </div>
        </div>
    )
}

export default QRCodeGenerator;