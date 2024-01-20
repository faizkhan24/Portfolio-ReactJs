import Navbar from "./components/navbar/Navbar";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import SkillsPage from "./pages/SkillsPage/SkillsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

function App() {
  return (
    <main className="main">
      <Navbar />
      <div className="main-content">
        <HomePage />
        <AboutPage />
        <SkillsPage />
        <ProjectsPage />
      </div>
      <div className="slide-out">
        <ContactPage />
      </div>
    </main>
  );
}

export default App;
