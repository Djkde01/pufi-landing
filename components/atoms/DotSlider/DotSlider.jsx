import { useContext } from "react";
import SliderContext from "../../../context/SlderContext";

function DotSlider({ number }) {
  const { goToSlide, slideNumber } = useContext(SliderContext);
  return (
    <div
      className={`dot ${number === slideNumber ? "dot-selected" : ""}`}
      tabIndex={number === slideNumber ? 0 : -1}
      role="menuitem"
      aria-label="sliderelement"
      onClick={() => {
        goToSlide(number);
      }}
    />
  );
}

export default DotSlider;
