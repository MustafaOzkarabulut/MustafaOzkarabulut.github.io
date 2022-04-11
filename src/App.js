import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Qualification from "./Components/Qualification";
import ScrollUp from "./Components/ScrollUp";
import Skills from "./Components/Skills";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactGA from 'react-ga';
import { useEffect } from "react";


function App() {
  useEffect(() => {
    const TRACKING_ID = "UA-192267248-1"; // OUR_TRACKING_ID
    ReactGA.initialize(TRACKING_ID);
    
})

  return (
    <div className="">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Portfolio />
      <Contact />
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
