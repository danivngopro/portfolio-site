import "./RedCycleButton.css";

function RedCycleButton(props) {
  return (
    <a href="#" className="animated-button7">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {props.text}
    </a>
  );
}

export default RedCycleButton;
