import React from "react";
import { useSelector } from "react-redux";
// @ts-ignore
import { RootState } from "../../store/store";
import { weatherIconSelector } from "store/selectors";

import "./weatherIcon.scss";

const WeatherIcon: React.FC = () => {
  const weatherIcon = useSelector<RootState, string>(weatherIconSelector(0));

  return (
    <div className="leftside_weather-icon">
      <div className="leftside_weather-icon-inner">
        <img
          src={`/weatherIcons/${weatherIcon}.svg`}
          alt="weather"
          className="leftside_weather-icon-img"
        />
      </div>
    </div>
  );
};

export default WeatherIcon;
