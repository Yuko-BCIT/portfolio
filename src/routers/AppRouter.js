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
import "../styles/styles.scss";

function AppRouter() {
  
  return (
    <BrowserRouter>
      <div className="app" >
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
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
