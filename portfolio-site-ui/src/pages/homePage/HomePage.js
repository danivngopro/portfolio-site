import "./HomePage.css";
import FlashyButton from "../../components/ui/buttons/flashyButton/FlashyButton";
import { useRef } from "react";

function HomePage() {
  const trackButton = useRef(null);

  const handleClick = () => {
    trackButton.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="home-page-container">
      <div className="home-page-name">
        <p className="home-page-name_big">Daniel Ventura</p>
        <p className="home-page-name_medium">Full Stack developer</p>
      </div>
      <div className="home-page-transferer">
        <p className="home-page-transferer_text">
          If you're here, you have come to check me out
        </p>
        <p className="home-page-transferer_text">well then?</p>
        <FlashyButton text="let's get started" onClick={handleClick}/>
      </div>
      <div className="home-page-secondbase-container">
        <h1 ref={trackButton}>hello bitch</h1>
      </div>
    </div>
  );
}

export default HomePage;
