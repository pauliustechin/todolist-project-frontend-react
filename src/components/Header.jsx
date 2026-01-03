import "./Header.css";
import { Link } from "react-router";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <p>
          <span></span>ToDoList
        </p>
      </Link>
      <nav className="header-nav">
        <ul>
          <Link to="/">
            <li>HOME</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
