import React from "react";
import "./fourDaysPredItem.scss";
// @ts-ignore
import { temperatureConverter } from "utilities/temperatureConverter";
import { useSelector } from "react-redux";
// @ts-ignore
import { RootState } from "../../store/store";
import { TimeZone, IList } from "types/data";
import { activeDataSelector, activeTypeSelector } from "store/selectors";

const PredictionDay: React.FC<TimeZone> = ({ timeZone, dayOfWeek }) => {
  const activeData = useSelector<RootState, IList>(
    activeDataSelector(timeZone)
  );
  const activeType = useSelector<RootState, string>(activeTypeSelector);

  return (
    <div className="leftside_next-four-days-item">
      <div className="leftside_next-four-days-item-temp">
        <p className="leftside_next-four-days-item-integer">
          {temperatureConverter(activeData.main.temp, activeType)}
        </p>
        <p className="leftside_next-four-days-item-type">
          {activeType === "celsius" ? "℃" : "°F"}{" "}
        </p>
      </div>
      <div className="leftside_next-four-days-item-icon">
        <img
          src={`/weatherIcons/${activeData.weather[0].icon}.svg`}
          alt="icon"
          className="leftside_next-four-days-item-icon-img"
        />
      </div>
      <div className="leftside_next-four-days-item-day-of-week">
        <p className="leftside_next-four-days-item-day-of-week-title">
          {dayOfWeek.slice(0, 3)}
        </p>
      </div>
    </div>
  );
};

export default PredictionDay;
