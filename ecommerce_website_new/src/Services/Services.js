import './Services.css'

export default function Services() {

    return (
        <div className="container" style={{paddingBottom:"60px"}}>
            <div className="row">
                <div className="col-lg-4 col-sm-12">
                    <div className="main-truck">
                        <i className="fa fa-truck icon-main" aria-hidden="true"></i>
                        <h3 className='text-services padd-top'>Super Fast and Free Delivery</h3>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="main-truck2" style={{ marginBottom: "30px" }}>
                        <div className="d-flex justify-content-center">
                            <i className="fa fa-shield icon-main" aria-hidden="true"></i>
                            <h3 className='text-services text-paddleft'>Non-contact Shipping</h3>
                        </div>
                    </div>
                    <div className="main-truck2">
                        <div className="d-flex justify-content-center">
                            <i className="fa fa-money icon-main" aria-hidden="true"></i>
                            <h3 className='text-services text-paddleft'>Money-back Guaranteed</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="main-truck mar-service">
                        <i className="fa fa-lock icon-main"  aria-hidden="true"></i>
                        <h3 className='text-services padd-top'>Super Secure Payment System</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}