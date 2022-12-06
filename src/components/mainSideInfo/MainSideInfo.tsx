import React from "react";
import CurrentTemp from "../currentTemp/CurrentTemp";
import CurrentTime from "../currentTime/CurrentTime";
import WeatherIcon from "../weatherIcon/WeatherIcon";
import WeatherDef from "../weathersDef/WeatherDef";
import "./mainSideInfo.scss";

const MainSideInfo: React.FC = () => {
  return (
    <>
      <WeatherIcon />
      <div className="leftside_wrapper">
        <div className="leftside_r-inner">
          <CurrentTemp />
          <CurrentTime />
        </div>
        <div className="leftside_l-inner">
          <WeatherDef position={"leftside"} />
        </div>
      </div>
    </>
  );
};

export default MainSideInfo;
