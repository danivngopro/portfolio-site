import "./HomePage.css";
import FlashyButton from "../../components/ui/buttons/flashyButton/FlashyButton";
import HomeSummery from "./components/HomeSummery";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigation = useNavigate();
  const trackButton = useRef(null);

  const handleClick = () => {
    trackButton.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleClickcv = () => {
    navigation("/cv");
  };

  const handleClickProjects = () => {
    navigation("/projects");
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
        <FlashyButton text="let's get started" onClick={handleClick} />
      </div>
      <div ref={trackButton} className="home-page-secondbase-container">
        <HomeSummery />
        <div className="buttons-container">
          <div className="gotocvpage">
            <FlashyButton text="Go to CV Page" onClick={handleClickcv} />
            <FlashyButton
              text="See my projects"
              onClick={handleClickProjects}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
