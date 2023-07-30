import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Compnent/Header";

import Home from "./Compnent/Home";
import Footer from "./Compnent/Footer";
import Contact from "./Compnent/Contact";
import Services from "./Compnent/Services";

import "./style/App.scss";
import "./style/Home.scss";
import "./style/Footer.scss";
import "./style/Contact.scss";
import "./style/mediaquary.scss";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
