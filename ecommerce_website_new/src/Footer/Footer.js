import { NavLink } from "react-router-dom";
import './Footer.css'

export default function Footer() {

    return (
        <footer>
            <div className="footer-top">
                <div className="container" style={{ paddingBottom: "50px" }}>
                    <div className="row">
                        <div className="col-lg-12 footer-res">
                            <div className="footer-contact">
                                <div>
                                    <p style={{ marginBottom: "0px" }}>Ready to get started? <br /> Talk to us today</p>
                                    {/* <p style={{marginBottom:"0px"}}>Talk to us today</p> */}
                                </div>
                                <div>
                                    <button className="btn btn-danger btn-footer">
                                        <NavLink to="/contact" style={{ textDecoration: "none", color: "#fff" }}>Get Started</NavLink>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ paddingTop: "40px" }}>
                        <div className="col-lg-3 col-sm-12">
                            <div>
                                <h3 className="head-footer">Mini Store</h3>
                                <p className="text-footer">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>

                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <h3 className="head-footer">Subscribe to get important updates</h3  >
                            <form action="">
                                <input type="email" placeholder="YOUR E-MAIL" className="form-control" style={{ marginBottom: "20px", fontSize: "14px" }} />
                                <input type="submit" value="subscribe" className="btn btn-danger btn-submit-f" />
                            </form>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <div>
                                <h3 className="head-footer">Follow Us</h3>
                                <div className="social-2">
                                    <a href="#" className="footer-icon"><i className="fa fa-gamepad icon-sub" aria-hidden="true"></i></a>
                                    <a href="#" className="footer-icon" ><i className="fa fa-instagram icon-sub" aria-hidden="true"></i></a>
                                    <a href="#" className="footer-icon"><i className="fa fa-youtube-play icon-sub" aria-hidden="true"></i></a>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <h3 className="head-footer">Call Us</h3>
                            <p className="text-footer"><a href="tel:12345678978" style={{ textDecoration: "none", color: "#fff" }}>+91 12345678978</a></p>

                        </div>
                    </div>

                </div>
                <hr style={{ backgroundColor: "#fff" }} />
                <div className="container">
                    <div className="footer-end">
                        <div>
                            <p className="text-footer">@{new Date().getFullYear()} MiniStore. All Rights Reserved</p>
                        </div>
                        <div>
                            <p className="text-footer">PRIVACY POLICY <br /> TERMS & CONDITIONS</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}