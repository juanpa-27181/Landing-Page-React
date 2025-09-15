function Navbar() {
  return (
    <nav className="bg-dark text-white p-3 d-flex justify-content-between">
      <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link text-white" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
