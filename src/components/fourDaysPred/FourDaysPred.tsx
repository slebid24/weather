import React from "react";
import PredictionDay from "../fourDaysPredItem/FourDaysPredItem";
import { useSelector } from "react-redux";
// @ts-ignore
import { RootState } from "../../store/store";
import { useMemo } from "react";
import {
  maxTempTimesInterval,
  maxTempDaysOfWeek,
} from "utilities/maxTempTimesInterval";
import {
  timeZoneSelector,
  tstampListSelector,
  // currentTimeForComparisonSelector,
} from "store/selectors";
import { IList } from "types/data";
import "./fourDaysPred.scss";

const FourDaysPred: React.FC = () => {
  const timeZone = useSelector<RootState, number>(timeZoneSelector);
  const tstampList = useSelector<RootState, IList[]>(tstampListSelector);
  // const currentTimeForComparison = useSelector<RootState, number>(
  //   currentTimeForComparisonSelector
  // );

  const content = useMemo(
    () => maxTempTimesInterval(timeZone, tstampList),
    [timeZone, tstampList]
  );

  const daysOfWeekOfPredDays = maxTempDaysOfWeek(timeZone, tstampList);

  return (
    <div className="leftside_next-four-days">
      {content.map((listIntervalDef: number, index: number) => {
        return (
          <PredictionDay
            timeZone={listIntervalDef}
            dayOfWeek={daysOfWeekOfPredDays[index]}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default FourDaysPred;
