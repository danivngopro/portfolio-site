import "./FlashyButton.css";

function FlashyButton(props) {
  return (
    <button className="flashyButton">{props.text}</button>
  );
}

export default FlashyButton;
