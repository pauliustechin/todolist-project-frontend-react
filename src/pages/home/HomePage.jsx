import { Link } from "react-router";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <Header/>
      <main className="main-container">
        <p>Sign Up to plan your day!</p>
        <Link to='/login' >
        <button className="home-buttons login-button">Log In</button>
        </Link>
        <Link to="/signup">
          <button className="home-buttons signup-button">Sign Up</button>
        </Link>
      </main>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
