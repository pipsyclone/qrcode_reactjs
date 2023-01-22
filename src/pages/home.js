import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="card card-body shadow col-sm-5 text-center mx-auto mt-5">
            <h3>QRCode Generator/Scanner</h3>

            <div className="d-flex mx-auto">
                <div className="me-5">
                    <Link className="qrcode-icon-hover" style={{fontSize: '150pt'}} to={'/qrcode-generator'}>
                        <i className="fa-solid fa-qrcode"></i>
                    </Link>

                    <h5>QRCode Generator</h5>
                </div>
                <div className="ms-5">
                    <Link className="qrcode-icon-hover" style={{fontSize: '150pt'}} to={'/qrcode-scanner'}>
                        <i className="fa-solid fa-qrcode"></i>
                    </Link>

                    <h5>QRCode Scanner</h5>
                </div>
            </div>
        </div>
    )
}

export default Home;