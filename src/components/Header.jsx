import "./Header.css";
import { Link } from "react-router";

function Header() {
  return (
    <header className="header">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <p>
          <span id="span1">To</span><span id="span2">Do</span><span id="span3">List</span>
        </p>
      </Link>
    </header>
  );
}

export default Header;
