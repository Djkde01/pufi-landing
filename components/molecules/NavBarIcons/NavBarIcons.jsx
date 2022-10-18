import {
  FaCouch,
  FaUmbrella,
  FaShoppingBag,
  FaCloudMoon,
} from "react-icons/fa";
import { itemsList } from "../../../constants/constants";

function NavBarIcons() {
  const selectIcon = (name) => {
    switch (name) {
      case "Pufi PUFF":
        return <FaCouch size="1.5rem" />;
      case "Pufi RAIN":
        return <FaUmbrella size="1.5rem" />;
      case "Pufi CART":
        return <FaShoppingBag size="1.5rem" />;
      case "Pufi NAP":
        return <FaCloudMoon size="1.5rem" />;

      default:
        return "Not found";
    }
  };

  return (
    <ul className="navbar-items">
      {itemsList.map(({ name }) => (
        <li>
          {selectIcon(name)}
          <h5>{name}</h5>
        </li>
      ))}
    </ul>
  );
}

export default NavBarIcons;
