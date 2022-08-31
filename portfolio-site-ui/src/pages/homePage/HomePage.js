import "./HomePage.css";
import Button from '@mui/material/Button';
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
        <button className="home-page-transferer_button"> let's get started</button>
      </div>
    </div>
  );
}

export default HomePage;
