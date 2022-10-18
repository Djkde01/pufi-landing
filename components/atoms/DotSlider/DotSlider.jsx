import { useContext } from "react";
import { SliderContext } from "../../../context/SliderContext";

function DotSlider({ number }) {
  const { slideNumber, setSlideNumber } = useContext(SliderContext);
  return (
    <div
      className={`dot ${number === slideNumber ? "dot-selected" : ""}`}
      tabIndex={number === slideNumber ? 0 : -1}
      role="menuitem"
      aria-label="sliderelement"
      onClick={() => {
        setSlideNumber(number);
      }}
    />
  );
}

export default DotSlider;
