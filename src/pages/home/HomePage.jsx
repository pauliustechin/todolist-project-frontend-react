import { Link } from "react-router";
import Header from "./../../components/Header.jsx";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <Header />
      <main className="main-container">
        <Link to="/signup">
          <button>Sign up</button>
        </Link>
      </main>
    </>
  );
}

export default HomePage;
