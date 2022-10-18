import DotSlider from "../../atoms/DotSlider/DotSlider";

function DotsList({ slidesCount }) {
  const renderDots = () => {
    const dots = [];
    for (let index = 0; index < slidesCount; index += 1) {
      dots.push(<DotSlider key={`dot-${index}`} number={index} />);
    }
    return dots;
  };

  return <span className="dots">{renderDots()}</span>;
}

export default DotsList;
