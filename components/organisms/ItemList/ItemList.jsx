import Item from "../../molecules/Item/Item";

function ItemList() {
  const itemsList = [
    {
      id: 1,
      name: "Pufi RAIN",
      description: "Descripción del producto. Este es un texto simulado",
      background: "/assets/items/pufi-rain.jpg",
      image: "/assets/items/rain-item.png",
    },
    {
      id: 2,
      name: "Pufi PUFF",
      description: "Descripción del producto. Este es un texto simulado",
      background: "/assets/items/pufi-puff.jpg",
      image: "/assets/items/puff-item.png",
    },
    {
      id: 3,
      name: "Pufi CART",
      description: "Descripción del producto. Este es un texto simulado",
      background: "/assets/items/pufi-cart.jpg",
      image: "/assets/items/cart-item.png",
    },
    {
      id: 4,
      name: "Pufi NAP",
      description: "Descripción del producto. Este es un texto simulado",
      background: "/assets/items/pufi-nap.jpg",
      image: "/assets/items/nap-item.jpg",
    },
  ];
  return (
    <section>
      {itemsList.map((item) => (
        <Item details={item} order={item.id % 2 === 0 ? "even" : "odd"} />
      ))}
    </section>
  );
}

export default ItemList;
