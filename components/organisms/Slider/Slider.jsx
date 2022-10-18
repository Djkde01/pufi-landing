import { useContext } from "react";
import { SliderContext } from "../../../context/SliderContext";
import Button from "../../atoms/Button/Button";
import SliderImage from "../../atoms/SliderImage/SliderImage";
import DotsList from "../../molecules/DotsList/DotsList";

function Slider({ items }) {
  const { slideNumber } = useContext(SliderContext);
  return (
    <div className="hero">
      {items.map(({ id, title, url }) => (
        <div
          key={id}
          className={`slider ${slideNumber === id ? "slider-active" : ""}`}
        >
          <SliderImage alt={title} src={url} />
        </div>
      ))}
      <div className="hero-content">
        <h1 className="hero-content-text">
          Estar cómodo, nunca fue tan fácil.
        </h1>
        <Button text="shop" type="primary" link="#" />
      </div>
      <DotsList slidesCount={items.length} />
    </div>
  );
}

export default Slider;
