import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";


const plants = [
{
id: 1,
name: "Lavender",
category: "Aromatic",
price: 12,
description: "Calming fragrance",
image: "https://via.placeholder.com/150"
},
{
id: 2,
name: "Mint",
category: "Medicinal",
price: 8,
description: "Great for digestion",
image: "https://via.placeholder.com/150"
}
];


const ProductList = () => {
const dispatch = useDispatch();


return (
        <div className="products">
            <h2>Our Plants</h2>
        <div className="product-grid">
        {plants.map(plant => (
        <div className="card" key={plant.id}>
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>{plant.description}</p>
            <p>${plant.price}</p>
            <button onClick={() => dispatch(addToCart(plant))}>
                Add to Cart
            </button>
            </div>
            ))}
            </div>
        </div>
    );
};


export default ProductList;