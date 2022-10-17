import { useContext } from "react";
import SliderContext from "../../../context/SlderContext";
import SliderImage from "../../atoms/SliderImage/SliderImage";

function SlidesList() {
  const { slideNumber, items } = useContext(SliderContext);

  return (
    <div style={{ transform: `translateX(-${slideNumber}*100)` }}>
      {items.map(({ url, title, id }) => (
        <SliderImage key={`heroimage${id}`} src={url} alt={title} />
      ))}
    </div>
  );
}

export default SlidesList;
