import Image from "next/image";
import Button from "../../atoms/Button/Button";

function Item({ order, details }) {
  return (
    <section className="item">
      <div
        className={`item-image item-image-${order}`}
        style={{
          "background-image": `url(${details.background})`,
        }}
      >
        <Button text="Shop" type="primary" link="#" />
      </div>
      <div className="item-content">
        <figure>
          <Image
            alt="details"
            src={details.image}
            width="100%"
            height="100%"
            objectFit="contain"
          />
        </figure>
        <h2>{details.name}</h2>
        <hr />
        <p>{details.description}</p>
        <Button text="Ver más" type="secondary" link="#" />
      </div>
    </section>
  );
}

export default Item;
