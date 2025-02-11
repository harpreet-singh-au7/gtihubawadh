import Button from "./components/button.jsx";
import Div1 from "./components/div1.jsx";
import Div2 from "./components/div2.jsx";
import Div3 from "./components/div3.jsx";
import Div4 from "./components/div4.jsx";
import Div5 from "./components/div5.jsx";
import Div5_p2 from "./components/div5_p2.jsx";
import Div6 from "./components/div6.jsx";
import Div7 from "./components/Schedule_cards.jsx";
import Scholarship_lim from "./components/Scholarship";
import Topheader from "./components/Header/Hedaer.tsx";
import CourseCo from "./components/CourseCo.jsx";
import Instructors from "./components/Instructors.jsx";
import Experts from "./components/Experts.jsx";
import Fee from "./components/Fee.jsx";
import Footer from "./components/Footer.jsx";
import Selection from "./components/Selcection.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

function Home() {
  return (
    <>
      <Topheader />
      <Div1 />
      <Div2 />
      <Selection />
      <Div3 />
      <Div4 />
      <Div7 />
      <Instructors />
      <Experts />
      <Fee />
      <Scholarship_lim />
      <Button />
      <CourseCo />
      <Div5 />
      <Div5_p2 />
      <Div6 />
      <Footer />
    </>
  );
}

export default Home;
