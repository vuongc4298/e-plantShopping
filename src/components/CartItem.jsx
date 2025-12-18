import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeFromCart } from "./CartSlice";
import { useNavigate } from "react-router-dom";


const CartItem = () => {
const items = useSelector(state => state.cart.items);
const dispatch = useDispatch();
const navigate = useNavigate();


const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);


return (
<div className="cart">
<h2>Your Cart</h2>
{items.map(item => (
<div className="cart-card" key={item.id}>
<img src={item.image} alt={item.name} />
<h3>{item.name}</h3>
<p>Unit: ${item.price}</p>
<div className="quantity">
<button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
<span>{item.quantity}</span>
<button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
</div>
<p>Total: ${item.price * item.quantity}</p>
<button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
</div>
))}
<h3>Grand Total: ${total}</h3>
<button onClick={() => navigate("/products")}>Continue Shopping</button>
<button onClick={() => alert("Checkout coming soon!")}>Checkout</button>
</div>
);
};


export default CartItem;