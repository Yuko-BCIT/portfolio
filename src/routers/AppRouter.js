import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";
import PageWork from "../pages/PageWork";
import "../styles/styles.scss";
import PageWorkCapstone from "../pages/PageWorkCapstone";
import PageWorkPortfolio from "../pages/PageWorkPortfolio";
import PageWorkMovie from "../pages/PageWorkMovie";
import PageWorkGame from "../pages/PageWorkGame";

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" exact element={<PageHome />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/work" element={<PageWork />} />
          <Route path="/work/capstone" element={<PageWorkCapstone />} />
          <Route path="/work/portfolio" element={<PageWorkPortfolio />} />
          <Route path="/work/movie" element={<PageWorkMovie />} />
          <Route path="/work/game" element={<PageWorkGame />} />
          {/* ナビにリンクがあるなし関係なくここに Link 入れてよい */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
