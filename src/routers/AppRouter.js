import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";
import PageWork from "../pages/PageWork";
import PageWorkCapstone from "../pages/PageWorkCapstone";
import PageWorkPortfolio from "../pages/PageWorkPortfolio";
import PageWorkMovie from "../pages/PageWorkMovie";
import PageWorkGame from "../pages/PageWorkGame";
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
          <Route path="/work" element={<PageWork />} />
          <Route path="/work/capstone" element={<PageWorkCapstone />} />
          <Route path="/work/portfolio" element={<PageWorkPortfolio />} />
          <Route path="/work/movie" element={<PageWorkMovie />} />
          <Route path="/work/game" element={<PageWorkGame />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
