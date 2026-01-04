import "./Footer.css";

function Footer() {

  const d = new Date();

  return (
    <footer className="footer">
      <p>© {d.getFullYear()} Paulius Semaška</p>
    </footer>
  );
}

export default Footer;
