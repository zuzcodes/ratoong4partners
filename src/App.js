import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Demo from './pages/Demo/Demo';
import SignUp from "./pages/SignUp/SignUp";
import ContactConfirmation from "./pages/ContactConfirmation/ContactConfirmation";
import SignUpConfirmation from "./pages/SignUpConfirmation/SignUpConfirmation";
import { Navbar, Footer, ContactForm } from "./components";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/contact" exact element={<ContactForm />} />
        <Route path="/demo" exact element={<Demo />} />
        <Route path="/sign-up" exact element={<SignUp />} />
        <Route path="/contact-confirmation" exact element={<ContactConfirmation />} />
        <Route path="/sign-up-confirmation" exact element={<SignUpConfirmation />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
