import { useContext } from "react";
import SliderContext from "../../../context/SlderContext";
import DotSlider from "../../atoms/DotSlider/DotSlider";

function DotsList() {
  const { slidesCount } = useContext(SliderContext);
  const renderDots = () => {
    const dots = [];
    for (let index = 0; index < slidesCount; index += 1) {
      dots.push(<DotSlider key={`dot-${index}`} number={index} />);
    }
    return dots;
  };

  return <span>{renderDots()}</span>;
}

export default DotsList;
