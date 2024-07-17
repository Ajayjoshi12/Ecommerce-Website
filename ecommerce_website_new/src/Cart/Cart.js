import { NavLink } from "react-router-dom";
import CartItem from "../Cart Item/CartItem";
import { useCartContext } from "../context/cart_context"
import './Cart.css'
import FormatPrice from "../Helpers/FormatPrice";

export default function Cart() {

    const { cart, clearCart, total_price, shipping_fee } = useCartContext();
    // console.log(cart);

    if (cart.length === 0) {
        return <div className="emptydiv">
            <h3 className="font-empty">No Cart in Item</h3>
        </div>
    }

    return (
        <section style={{ paddingTop: "60px" }}>
            <div className="container">
                <div className="cart_heading grid-five-column" style={{ display: "grid", gap: "5rem" }}>
                    <p>Item</p>
                    <p className="cart_hide">
                        Price
                    </p>
                    <p>Quantity</p>
                    <p className="cart_hide">Subtotal</p>
                    <p>Remove</p>
                </div>
                <hr />
                <div className="cart-item">
                    {
                        cart.map((curElem) => {
                            return <CartItem key={curElem.id} {...curElem} />
                        })
                    }
                </div>
                <hr />
                <div className="cart-two-button">
                    <NavLink to="/products">
                        <button className="btn btn-danger btn-shop">Continue Shopping</button>
                    </NavLink>
                    <button onClick={clearCart} className="btn btn-danger btn-clear">clear cart</button>
                </div>
                <div className="order-total-amount">
                    <div className="order-total--subdata">
                        <div className="div-total">
                            <p>Subtotal :</p>
                            <p style={{fontWeight:"bold"}}><FormatPrice price={total_price} /></p>
                        </div>
                        <div className="div-total">
                            <p>shipping fee :</p>
                            <p style={{fontWeight:"bold"}}><FormatPrice price={shipping_fee} /></p>
                        </div>
                        <hr />
                        <div className="div-total">
                            <p>order total :</p>
                            <p style={{fontWeight:"bold"}}>
                                <FormatPrice price={shipping_fee + total_price} />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}