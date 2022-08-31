import "./CVPage.css";
import RedCycleButton from "./components/buttons/cvDownloadButton/RedCycleButton";

function CVPage() {
  return (
    <div className="cv-page-container">
      <div className="cv-page-text-container">
      <p className="cv-page-headline">So who am i?</p>
        <p className="cv-page-headline_text">As you have pretty much realized by now.. my name is Daniel Ventura.</p>
        <p className="cv-page-headline_text">Logical and results-driven Full stack developer with 2 years of experience.</p>
        <p className="cv-page-headline_text">A graduated B.Sc. in mathematics and computer science, in Atuda route.</p>
        <p className="cv-page-headline_text">Fast learner, responsible, operating great under pressure and a team player.</p>
      
        <p className="cv-page-headline">Education</p>
        <p className="cv-page-headline_text_subheadline">B.Sc. in Mathematics and Computer science | Ariel University</p>
        <p className="cv-page-headline_text">2018 – 2021</p>
        <p className="cv-page-headline_text">A bachelor’s degree in Mathematics and computer science with a cyber security internship.</p>
      
        <p className="cv-page-headline">EXPERIENCE</p>
        <p className="cv-page-headline_text_subheadline">Full Stack developer | I.D.F</p>
        <p className="cv-page-headline_text">2020 – 2022</p>
        <p className="cv-page-headline_text">Developed full stack web applications which processed, analyzed, and rendered data visually.</p>
        <p className="cv-page-headline_text">Planned, wrote, and debugged web applications and software with complete coverage.</p>
        <p className="cv-page-headline_text">Developed app integration with REST/ RPC and other APIs for I.D.F</p>

        <p className="cv-page-headline_text_subheadline">IT Manager | Brandman research institute</p>
        <p className="cv-page-headline_text">2020 – 2022</p>
        <p className="cv-page-headline_text">Developed full stack web applications which processed, analyzed, and rendered data visually.</p>
        <p className="cv-page-headline_text">Planned, wrote, and debugged web applications and software with complete coverage.</p>
        <p className="cv-page-headline_text">Developed app integration with REST/ RPC and other APIs for I.D.F</p>

        <p className="cv-page-headline">SKILLS</p>
        <p className="cv-page-headline_text">• Full Stack development with JavaScript and TypeScript</p>
        <p className="cv-page-headline_text">• Frontend development using Angular and React</p>
        <p className="cv-page-headline_text">• Backend development using express - rest or rpc, nodejs, mongo, graphql, jwt and more. </p>
        <p className="cv-page-headline_text">• Tests and automation using Cypress and Jest</p>
        <p className="cv-page-headline_text">• Cloud and server maintenance</p>
        <p className="cv-page-headline_text">• Operating systems: windows, mac, and various versions of Linux</p>
        <p className="cv-page-headline_text">• AI development and game development with Python</p>
        <p className="cv-page-headline_text">• Game development in C#</p>

      </div>
      <div className="cv-page-button-container">
        <RedCycleButton text="download my cv" />
      </div>
    </div>
  );
}

export default CVPage;
