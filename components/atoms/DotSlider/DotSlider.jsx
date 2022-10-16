function DotSlider({ number }) {
  return <div className={`dot ${number === 1 ? "dot-selected" : ""}`} />;
}

export default DotSlider;
