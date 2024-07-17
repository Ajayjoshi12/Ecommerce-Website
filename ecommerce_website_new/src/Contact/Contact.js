import './Contact.css'

export default function Contact() {

    return (
        <section>
            <div>
                <h2 className="heading-contact">Feel Free To Contact Us</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.058054314591!2d72.51811417482534!3d23.05833311499367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9d0845742b0f%3A0x7e05407cae921b5a!2sPalladium%20Ahmedabad!5e0!3m2!1sen!2sin!4v1720369452228!5m2!1sen!2sin" width="100%" height="400" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="container" style={{ padding: "60px 0px" }}>
                <div className='row justify-content-center'>
                    <div className='col-lg-6'>
                        <form action="">
                            <div className="row" style={{ paddingBottom: "20px" }}>
                                <div className="col-lg-12">
                                    <input type="text" className="form-control" name="username" placeholder="username" required autoComplete="off" />
                                </div>
                            </div>
                            <div className="row" style={{ paddingBottom: "20px" }}>
                                <div className="col-lg-12">
                                    <input type="email" className="form-control" name="Email" placeholder="Email" required autoComplete="off" />
                                </div>
                            </div>
                            <div className="row" style={{ paddingBottom: "20px" }}>
                                <div className="col-lg-12">
                                    <textarea name="Message" className="form-control" rows="5" placeholder="Enter your message" required autoComplete="off"></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div>
                                        <input className='btn btn-danger btn-submit' type="submit" value="Send" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}