function DotSlider({ selected }) {
  return <div className={`dot ${selected ? "dot-selected" : ""}`} />;
}

export default DotSlider;
