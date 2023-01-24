import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";
import PageWorks from "../pages/PageWorks";
import PageWorksCapstone from "../pages/PageWorksCapstone";
import PageWorksPortfolio from "../pages/PageWorksPortfolio";
import PageWorksMovie from "../pages/PageWorksMovie";
import PageWorksGame from "../pages/PageWorksGame";
import PageWorksWelding from "../pages/PageWorksWelding";
import Scroll from "../utilities/scroll";
import Helmet from "react-helmet";
import "../styles/styles.scss";

function AppRouter() {
  
  return (
    <BrowserRouter>
    {/* Helmet for meta tag on each pages */}
      <Helmet>
        <title>Yuko Web Works</title>
        <meta name="description" content="Front end web developer with passion for building user-friendly, functional, eye-catching websites and leaning new technologies. Proficient in JavaScript, CSS, API integration and custom WordPress development." />
      </Helmet>
      <div className="app" >
        <Scroll />
        <Header />
        <Routes>
          {/* put all the internal links, regardless of NavLink or not */}
          <Route path="/" exact element={<PageHome />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/works" element={<PageWorks />} />
          <Route path="/works/capstone" element={<PageWorksCapstone />} />
          <Route path="/works/portfolio" element={<PageWorksPortfolio />} />
          <Route path="/works/movie" element={<PageWorksMovie />} />
          <Route path="/works/game" element={<PageWorksGame />} />
          <Route path="/works/welding" element={<PageWorksWelding />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
