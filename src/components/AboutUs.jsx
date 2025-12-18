import { useNavigate } from "react-router-dom";


const AboutUs = () => {
const navigate = useNavigate();


return (
    <div className="about-us">
        <h1>🌿 Paradise Nursery</h1>
        <p>Your one-stop shop for beautiful house plants.</p>
        <button onClick={() => navigate("/products")}>
            Browse Plants
        </button>
    </div>
    );
};


export default AboutUs;