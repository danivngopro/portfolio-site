import "./RedCycleButton.css";

function RedCycleButton(props) {
  return (
    <a href="Daniel Ventura CV.pdf" download="Daniel Ventura CV.pdf" className="animated-button7">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {props.text}
    </a>
  );
}

export default RedCycleButton;
