import { Link } from "react-router";
import LoginUser from "../loginPage/LoginPage.jsx";
import "./HomePage.css";

function HomePage({ onDataReceived, mytesturl }) {
  return (
    <>
      <LoginUser onDataReceived={onDataReceived} mytesturl={mytesturl}/>
      <main className="main-container">
        <Link to="/signup">
          <button>Sign up</button>
        </Link>
      </main>
    </>
  );
}

export default HomePage;
