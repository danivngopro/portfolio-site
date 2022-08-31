import "./FlashyButton.css";

function FlashyButton(props) {
  return (
    <button className="flashyButton" onClick={props.onClick}>{props.text}</button>
  );
}

export default FlashyButton;
