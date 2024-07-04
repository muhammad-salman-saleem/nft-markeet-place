import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Keyboard from "./Pages/Keyboard";
import Activity from "./Pages/Activity";
import MyAccount from "./Pages/MyAccount";
import Explore from "./Pages/Explore";
import Faq from "./Pages/Faq";
import About from "./Pages/About";
import { Box } from "@mui/material";
import TermsOfService from "./Pages/TermsOfService";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Disclaimer from "./Pages/Disclaimer";

const parentLayout = {
  // maxWidth: "1440px",
  // width:"100%",
  // margin: "auto",
};

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Box sx={parentLayout}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Keyboard" element={<Keyboard />}></Route>
          <Route path="/Activity" element={<Activity />}></Route>
          <Route path="/MyAccount" element={<MyAccount />}></Route>
          <Route path="/Explore" element={<Explore />}></Route>
          <Route path="/Faq" element={<Faq />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/term-of-service" element={<TermsOfService />}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
          <Route path="/disclaimer" element={<Disclaimer />}></Route>
        </Routes>
      </Box>
      <Footer />
    </BrowserRouter>
  );
}
