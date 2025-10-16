import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";

function Application() {
  return (
    <div>
      <Header> </Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer> </Footer>
    </div>
  );
}

export default Application;
