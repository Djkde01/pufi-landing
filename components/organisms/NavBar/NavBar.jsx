import NavBarIcons from "../../molecules/NavBarIcons/NavBarIcons";

function NavBar() {
  return (
    <nav className="navbar">
      <h1>Pufi</h1>
      <NavBarIcons />
      <ul className="navbar-items">
        <li>Mi cuenta</li>
        <li>Mi compra</li>
      </ul>
    </nav>
  );
}

export default NavBar;
