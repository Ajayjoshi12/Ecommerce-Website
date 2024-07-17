import { useState } from "react";
import './AddToCart.css'
import CartAmountToggle from "../Cart Amount Toggle/CartAmountToggle";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/cart_context";

export default function AddToCart({ product }) {
    const { addToCart } = useCartContext();

    const { id, colors, stock } = product;
    const [color, setColor] = useState(colors[0])

    const [amount, setAmount] = useState(1)

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1)
    }

    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock)
    }

    return (
        <div>
            <div className="colors">
                <p>
                    Colors :
                    {
                        colors.map((curColor, index) => {
                            return (
                                <button key={index} style={{ backgroundColor: curColor }}
                                    className={color === curColor ? "btnStyle active" : "btnStyle"}
                                    onClick={() => { setColor(curColor) }}
                                >
                                    {color === curColor ? <i className="fa fa-check checkStyle" aria-hidden="true"></i> : null}
                                </button>
                            )
                        })
                    }
                </p>
            </div>
            <CartAmountToggle
                amount={amount}
                setDecrease={setDecrease}
                setIncrease={setIncrease}
            />

            <NavLink to="/cart" onClick={()=>{addToCart(id,color, amount, product)}}>
                <button className="btn btn-danger btn-cart">Add to Cart</button>
            </NavLink>  
        </div>
    )
}