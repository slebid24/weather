import React from "react";
import { useEffect, useState } from "react";
import "../dayGraph/dayGraph.scss";
import {
  LineChart,
  Line,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
} from "recharts";
// @ts-ignore
import AstroDataService from "services/astroData";
import { useSelector } from "react-redux";
// @ts-ignore
import { RootState } from "../../store/store";
// @ts-ignore
import { TimeConversation } from "utilities/timeConversation";
import useGraphCustom from "hooks/useGraphCustom";
// @ts-ignore
// import DotsSpinner from "../spinner/DotsSpinner";
import { GeoLocFromData, AstroDate } from "types/data";
import { coordSelector, differenceOfTimeZoneSelector } from "store/selectors";

const BarChart = () => {
  const [astroDataState, setAstroDataState] = useState<AstroDate>({
    sunrise: "NA",
    solar_noon: "NA",
    sunset: "NA",
    day_length: 0,
  });

  const { CustomTooltip, CustomizedDot, CustomizedLabel } = useGraphCustom();

  const coord = useSelector<RootState, GeoLocFromData>(coordSelector);
  const differenceOfTimeZone = useSelector<RootState, number>(
    differenceOfTimeZoneSelector
  );

  useEffect(() => {
    AstroDataService(coord.lat, coord.lon).then((result) =>
      setAstroDataState(result)
    );
    // eslint-disable-next-line
  }, []);

  const data = [
    { name: 0, value: "00:00", x: 0, y: -3 },
    {
      name: "Sunrise",
      value: TimeConversation(astroDataState.sunrise, differenceOfTimeZone),
      x: 1,
      y: 0,
    },
    {
      name: "Solar Noon",
      value: TimeConversation(astroDataState.solar_noon, differenceOfTimeZone),
      x: 2,
      y: 6,
    },
    {
      name: "Sunset",
      value: TimeConversation(astroDataState.sunset, differenceOfTimeZone),
      x: 3,
      y: 0,
    },
    { name: 0, value: "00:00", x: 4, y: -3 },
  ];

  return (
    <>
      <ResponsiveContainer width="99%" height={200}>
        <LineChart width={500} height={200} data={data}>
          <Line
            type="natural"
            dataKey="y"
            stroke="#e5e7eb"
            strokeWidth={5}
            fill="#e5e7eb"
            dot={<CustomizedDot />}
            activeDot={false}
          />
          <ReferenceLine
            y={0}
            stroke="#e5e7eb"
            strokeWidth={3}
            isFront={false}
          />
          <ReferenceLine
            label={
              <CustomizedLabel dayLengthTimeStapm={astroDataState.day_length} />
            }
            stroke="#e5e7eb"
            segment={[
              { x: 1, y: 0 },
              { x: 3, y: 0 },
            ]}
          />
          <XAxis dataKey="name" hide={true} />
          <Tooltip
            cursor={false}
            content={CustomTooltip}
            offset={5}
            animationDuration={500}
            coordinate={{ x: -200, y: -200 }}
            wrapperStyle={{
              top: "-40px",
              fontSize: "18px",
              lineHeight: "24px",
              color: "#fff",
              fontFamily: "Inter400",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              borderRadius: "20px",
              padding: "5px",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarChart;
