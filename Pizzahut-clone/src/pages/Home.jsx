import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza-3010062_1280.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Slice Delight </h1>
        <p>&quot;Crafted with Love, Served by the Slice!&quot;</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
