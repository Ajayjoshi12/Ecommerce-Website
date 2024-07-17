import './CartAmountToggle.css'

export default function CartAmountToggle({ amount, setDecrease, setIncrease }) {


    return (
        <div className="cart-button">
            <div className="amount-toggle">
                <button className="btn-toggle" onClick={() => { setDecrease() }}>
                    <i class="fa fa-minus" aria-hidden="true"></i>
                </button>
                <div className="amount-style">{amount}</div>
                <button className="btn-toggle" onClick={() => { setIncrease() }}>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    )
}