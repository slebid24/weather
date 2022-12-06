import React from "react";

import currentTimeService from "../../services/currentTime";
import { useEffect, useState } from "react";
// @ts-ignore
import { useSelector } from "react-redux";
// @ts-ignore
import { RootState } from "../../store/store";
// @ts-ignore
import DotsSpinner from "../spinner/DotsSpinner";
// @ts-ignore
import { useDispatch } from "react-redux";
import { setTime } from "./currentTimeSlice";
import { DateInterface } from "types/data";
import { differenceOfTimeZoneSelector } from "store/selectors";
import "./currentTime.scss";

const CurrentTime: React.FC = () => {
  const [date, setDate] = useState<DateInterface>({
    dayOfMonth: "NA",
    month: "NA",
    year: "NA",
    dayOfWeek: "NA",
    time: "NA",
    ts: 0,
  });

  const dispatch = useDispatch();

  const differenceOfTimeZone = useSelector<RootState, number>(
    differenceOfTimeZoneSelector
  );

  useEffect(() => {
    dispatch(setTime(currentTimeService(differenceOfTimeZone)));
    const interval = setInterval(
      () => setDate(currentTimeService(differenceOfTimeZone)),
      1000
    );

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {date.dayOfMonth === "NA" ? (
        <DotsSpinner spinnerPosition={"time"} width={"80px"} height={"80px"} />
      ) : (
        <div className="leftside_current-time">
          <div className="leftside_current-time-inner">
            <div className="leftside_current-time-topside">
              <p className="leftside_current-time-day">{date.dayOfMonth}</p>
              <p className="leftside_current-time-month">{date.month}</p>
              <p className="leftside_current-time-year">{date.year}</p>
            </div>
            <div className="leftside_current-time-botside">
              <p className="leftside_current-time-day-of-week">
                {date.dayOfWeek}
              </p>
              <p className="leftside_current-time-hours">{date.time}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CurrentTime;
