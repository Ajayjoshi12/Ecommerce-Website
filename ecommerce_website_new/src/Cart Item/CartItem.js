import CartAmountToggle from '../Cart Amount Toggle/CartAmountToggle'
import { useCartContext } from '../context/cart_context'
import FormatPrice from '../Helpers/FormatPrice'
import './CartItem.css'

export default function CartItem({ id, name, image, color, price, amount }) {

    const { removeItem, setDecrease, setIncrease } = useCartContext();

    // const setDecrease = () => {
    //     amount > 1 ? setAmount(amount - 1) : setAmount(1)
    // }

    // const setIncrease = () => {
    //     amount < stock ? setAmount(amount + 1) : setAmount(stock)
    // }

    return (
        <div className="cart_heading grid-five-column" style={{ display: "grid", gap: "5rem" }}>
            <div className="cart-image--name">
                <div>
                    <figure>
                        <img className="img-fluid img-cart" src={image} alt={id} />
                    </figure>
                </div>
                <div>
                    <p>{name}</p>
                    <div className="color-div">
                        <p>color :</p>
                        <div className="color-style" style={{ backgroundColor: color, color: color }}>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-hide">
                <p><FormatPrice price={price} /></p>
            </div>

            {/* Quantity */}
            <CartAmountToggle
                amount={amount}
                setDecrease={() => setDecrease(id)}
                setIncrease={() => setIncrease(id)}
            />

            {/* Subtotal */}
            <div className="cart-hide">
                <p>
                    <FormatPrice price={price * amount} />
                </p>
            </div>

            <div>
                <i className="fa fa-trash remove_icon" aria-hidden="true" onClick={() => {removeItem(id)}}></i>
            </div>
        </div>
    )
}