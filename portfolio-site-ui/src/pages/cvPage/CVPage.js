import "./CVPage.css";
import RedCycleButton from "../../components/ui/buttons/redCycleButton/RedCycleButton";

function CVPage() {
  return (
    <div className="cv-page-container">
      <h1>cv page</h1>
      <h1>here we go this is my cv.</h1>
      <h1>fk you now go on with your life and imagine its a real cv ok???</h1>
      <h1>what do u mean im delusional? just imaging its the best cv you have ever seen</h1>
      <h1>nha im just kidding bruh, here you go..</h1>
      <div className="cv-page-button-container">
        <a href="Daniel Ventura CV.pdf" download="Daniel Ventura CV.pdf">
          <RedCycleButton text="download cv" />
        </a>
      </div>
    </div>
  );
}

export default CVPage;
