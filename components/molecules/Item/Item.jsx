import Image from "next/image";
import Button from "../../atoms/Button/Button";

function Item({ order, details }) {
  return (
    <section className="item">
      <div
        className={`item-image item-image-${order}`}
        style={{
          backgroundImage: `url(${details.background})`,
        }}
      >
        <Button text="Shop" type="primary" link="#" />
      </div>
      <div className="item-content">
        <figure>
          <Image
            alt="details"
            src={details.image}
            width={200}
            height={200}
            objectFit="contain"
          />
        </figure>
        <h2 className="item-content-name">{details.name}</h2>
        <hr />
        <p className="item-content-description">{details.description}</p>
        <Button text="Ver más" type="secondary" link="#" />
      </div>
    </section>
  );
}

export default Item;
