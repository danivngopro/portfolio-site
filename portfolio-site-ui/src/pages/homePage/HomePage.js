import "./HomePage.css";
import FlashyButton from "../../components/ui/buttons/flashyButton/FlashyButton";

function HomePage() {
  return (
    <div className="home-page-container">
      <div className="home-page-name">
        <p className="home-page-name_big">Daniel Ventura</p>
        <p className="home-page-name_medium">Full Stack developer</p>
      </div>
      <div className="home-page-transferer">
        <p className="home-page-transferer_text">if you're here, you have come to check me out</p>
        <p className="home-page-transferer_text">well then?</p>
        <FlashyButton text="let's get started"/>
      </div>
    </div>
  );
}

export default HomePage;
