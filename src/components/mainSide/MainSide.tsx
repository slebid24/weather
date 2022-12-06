import React from "react";
import TempTypesButtons from "../tempTypesButtons/TempTypesButtons";
import MainSideInfo from "../mainSideInfo/MainSideInfo";
import FourDaysPred from "../fourDaysPred/FourDaysPred";
import Searching from "../searching/Searching";

// @ts-ignore

// import { Link } from "react-router-dom";
import "./mainSide.scss";

const MainSide: React.FC = () => {
  return (
    <section className="leftside">
      <Searching position={"left"} />
      <TempTypesButtons />
      <MainSideInfo />
      <FourDaysPred />
    </section>
  );
};

export default MainSide;
