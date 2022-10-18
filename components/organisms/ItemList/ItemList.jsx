import { itemsList } from "../../../constants/constants";
import Item from "../../molecules/Item/Item";

function ItemList() {
  return (
    <section>
      {itemsList.map((item) => (
        <Item details={item} order={item.id % 2 === 0 ? "even" : "odd"} />
      ))}
    </section>
  );
}

export default ItemList;
