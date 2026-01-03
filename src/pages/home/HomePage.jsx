import { Link } from "react-router";
import LoginUser from "../loginPage/LoginPage.jsx";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import "./HomePage.css";

// function HomePage({ onDataReceived, mytesturl }) {
function HomePage() {
  return (
    <>
      <Header/>
      {/* <LoginUser onDataReceived={onDataReceived} mytesturl={mytesturl}/> */}
      <main className="main-container">
        <Link to='/login' >
        <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Sign up</button>
        </Link>
      </main>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
