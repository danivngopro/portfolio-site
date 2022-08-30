import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/form/Navbar';
import HomePage from './pages/homePage/HomePage';
import CVPage from './pages/cvPage/CVPage';
import ProjectsPage from './pages/projectsPage/ProjectsPage';

function App() {
  return (
    <div className='appContainer'>
      <Navbar />
       <div className='comp'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cv' element={<CVPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
