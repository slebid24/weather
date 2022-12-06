import React from "react";
import "./currentTemp.scss";
import { temperatureConverter } from "utilities/temperatureConverter";
import { useSelector } from "react-redux";
// @ts-ignore
import { RootState } from "../../store/store";
import { activeTypeSelector, tempOfCurrentDaySelector } from "store/selectors";

const CurrentTemp: React.FC = () => {
  const activeTypeOfTemp = useSelector<RootState, string>(activeTypeSelector);
  const temperatureOfCurrentDay = useSelector<RootState, number>(
    tempOfCurrentDaySelector(0)
  );

  return (
    <div className="leftside_weather_temp">
      <div className="leftside_weather_temp-inner">
        <p className="leftside_weather_temp-integer">
          {temperatureConverter(temperatureOfCurrentDay, activeTypeOfTemp)}
        </p>
        <p className="leftside_weather_temp-type">
          {activeTypeOfTemp === "celsius" ? "℃" : "°F"}
        </p>
      </div>
    </div>
  );
};

export default CurrentTemp;
