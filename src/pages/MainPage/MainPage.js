import { HashLink } from "react-router-hash-link";

import MainHeader from "../../components/Header/MainHeader";
import AboutUs from "./AboutUs";
import HowItsWork from "./HowItsWork";
import Feedbacks from "./Feedbacks";
import Footer from "../../components/Footer/Footer";
import './MainPage.css'

export default function MainPage() {

  return (
    <>
      <MainHeader />
      <main className="main">
              <AboutUs />
              <HowItsWork />
              <Feedbacks />
      </main>
      <Footer />
    </>
  );
}
