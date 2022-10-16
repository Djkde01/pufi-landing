import DotSlider from "../../atoms/DotSlider/DotSlider";

function DotsList() {
  const renderDots = () => {
    const dots = [];
    for (let index = 0; index < 3; index += 1) {
      dots.push(<DotSlider key={`dot-${index}`} number={index} />);
    }
    return dots;
  };

  return <span>{renderDots()}</span>;
}

export default DotsList;
