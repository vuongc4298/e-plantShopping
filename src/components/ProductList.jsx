import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

/*
  Plant data organized by category.
  Each category contains multiple plants.
*/
const plantCategories = [
  {
    category: "Aromatic Plants",
    plants: [
      {
        id: 1,
        name: "Lavender",
        price: 12,
        description: "A calming aromatic plant known for its soothing fragrance.",
        image: "https://via.placeholder.com/150"
      },
      {
        id: 2,
        name: "Rosemary",
        price: 10,
        description: "A fragrant herb commonly used in cooking and aromatherapy.",
        image: "https://via.placeholder.com/150"
      },
      {
        id: 3,
        name: "Jasmine",
        price: 15,
        description: "A popular aromatic plant with sweet-scented flowers.",
        image: "https://via.placeholder.com/150"
      }
    ]
  },
  {
    category: "Medicinal Plants",
    plants: [
      {
        id: 4,
        name: "Aloe Vera",
        price: 9,
        description: "A medicinal plant known for healing and skin care benefits.",
        image: "https://via.placeholder.com/150"
      },
      {
        id: 5,
        name: "Mint",
        price: 8,
        description: "A refreshing medicinal plant that aids digestion.",
        image: "https://via.placeholder.com/150"
      },
      {
        id: 6,
        name: "Tulsi",
        price: 11,
        description: "A sacred medicinal herb with immune-boosting properties.",
        image: "https://via.placeholder.com/150"
      }
    ]
  }
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="products">
      <h2>Our Plants</h2>

      {/* Loop through each plant category */}
      {plantCategories.map((category) => (
        <div key={category.category}>
          <h3>{category.category}</h3>

          <div className="product-grid">
            {/* Loop through plants within the category */}
            {category.plants.map((plant) => (
              <div className="card" key={plant.id}>
                <img src={plant.image} alt={plant.name} />
                <h4>{plant.name}</h4>
                <p>{plant.description}</p>
                <p>${plant.price}</p>

                <button onClick={() => dispatch(addItem(plant))}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
