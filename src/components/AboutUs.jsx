import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="about-us-container">
      <h1>Paradise Nursery</h1>

      <p>
        Paradise Nursery is a premier online destination for high-quality house
        plants. We offer a wide variety of indoor plants that enhance living
        spaces while promoting a healthy and calming environment.
      </p>

      <p>
        Our mission is to make plant care simple and accessible for everyone.
        From aromatic plants to medicinal varieties, we carefully select each
        product to ensure sustainability, beauty, and long-term customer
        satisfaction.
      </p>

      <button onClick={() => navigate("/products")}>
        Get Started
      </button>
    </div>
  );
};

export default AboutUs;
