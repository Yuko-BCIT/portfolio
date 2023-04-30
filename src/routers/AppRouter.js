import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logo from "../components/logo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";
import PageWorks from "../pages/PageWorks";
import PageWorksCapstone from "../pages/PageWorksCapstone";
import PageWorksPortfolio from "../pages/PageWorksPortfolio";
import PageWorksMovie from "../pages/PageWorksMovie";
import PageWorksGame from "../pages/PageWorksGame";
import PageNotFound from "../pages/PageNotFound";
import Scroll from "../utilities/scroll";
import Helmet from "react-helmet";
import "../styles/styles.scss";

function AppRouter() {
  return (
    <BrowserRouter>
      {/* Helmet for meta tag on each pages */}
      <Helmet>
        <title>Yuko Kitahata</title>
        <meta
          name="description"
          content="Web developer with a passion for building user-friendly, functional, and eye-catching websites
          and apps. Proficient in React, JavaScript, CSS, API and custom WordPress development."
        />
      </Helmet>
      <div className="app">
        <Scroll />
        <Logo />
        <Header />
        <Routes>
          <Route path="/" exact element={<PageHome />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/works" element={<PageWorks />} />
          <Route path="/works/portfolio" element={<PageWorksPortfolio />} />
          <Route path="/works/capstone" element={<PageWorksCapstone />} />
          <Route path="/works/movie" element={<PageWorksMovie />} />
          <Route path="/works/game" element={<PageWorksGame />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
