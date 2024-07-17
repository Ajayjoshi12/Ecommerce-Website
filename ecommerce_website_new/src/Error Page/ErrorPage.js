import { NavLink } from 'react-router-dom'
import './ErrorPage.css'

export default function ErrorPage() {


    return (
        <div className="container" style={{ padding: "60px 0px" }}>
            <div className="text-center">
                <h2 className="head-error">404</h2>
                <h3 className="sub-error">UH OH! You're lost</h3>
                <p style={{ padding: "10px 0px" }}>
                    The page you are looking for does not exist. How you got here is a
                    mystery. But you can click the button below to go back to the homepage.
                </p>
                <NavLink to="/">
                    <button className="btn btn-danger btn-error">Go Back to Home</button>
                </NavLink>
            </div>
        </div>
    )
}