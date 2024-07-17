import { NavLink } from "react-router-dom";
import './Navbar.css'
import { useCartContext } from "../context/cart_context";


export default function Navbar() {

    const { total_item } = useCartContext();

    return (
        <header style={{ backgroundColor: "#f6f8fa" }}>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    {/* <a class="navbar-brand ml-5" href="#">Welcome to Book Management</a> */}
                    <NavLink to="/" className="navbar-brand nb"><img src="assets/img/logo-main.png" alt="logo img" /></NavLink>
                    <button className="navbar-toggler nt-btn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i class="fa fa-bars" aria-hidden="true"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link nav1" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link nav1" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link nav1" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link nav1" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link nav1 cart-trolley-main" to="/cart">
                                    <i class="fa fa-shopping-cart cart-trolley" aria-hidden="true"></i>
                                    <span className="cart-total">{total_item}</span>
                                </NavLink>
                            </li>

                        </ul>

                    </div>
                </nav>
            </div>

        </header>
    )
}