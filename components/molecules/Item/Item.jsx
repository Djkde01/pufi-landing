import Image from "next/image";
import Button from "../../atoms/Button/Button";

function Item({ order, details }) {
  return (
    <section className="item">
      <div className={`item-image item-image-${order}`}>
        <Button text="Shop" type="primary" link="#" />
      </div>
      <div className="item-content">
        <Image alt="details" />
        <h2>{details}</h2>
        <hr />
        <p>{details}</p>
        <Button text="Ver más" type="secondary" link="#" />
      </div>
    </section>
  );
}

export default Item;
