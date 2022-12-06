import React from "react";
import { getTimeRemaining } from "utilities/graphsUtilities";
import {
  // getZero,
  defineDivider,
  defineFontSize,
} from "utilities/graphsUtilities";
// @ts-ignore
import { halfOfSun, fullSun } from "../../src/components/dayGraph/graphSvg";

const useGraphCustom = () => {
  const CustomizedDot = (props: any) => {
    const { cx, cy, value } = props;
    const defContent = (val: any) => {
      if (val === 0) {
        return halfOfSun(cx, cy);
      } else if (val === 6) {
        return fullSun(cx, cy);
      }
      return null;
    };
    const content = defContent(value);
    return <>{content}</>;
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length && label) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : ${payload[0].payload.value}`}</p>
        </div>
      );
    }
    return null;
  };

  const CustomizedLabel = ({ viewBox, dayLengthTimeStapm }: any) => {
    const { hours, minutes, seconds } = getTimeRemaining(dayLengthTimeStapm);
    return (
      <text
        x={viewBox.x + viewBox.x / defineDivider(viewBox.x)}
        y={viewBox.y + 20}
        fill="#FFF"
        width="50px"
        style={{
          fontSize: `${defineFontSize(viewBox.x)}px`,
          lineHeight: "19px",
          fontFamily: "Inter400",
          textShadow: "rgb(0, 0, 0, 30%) -2px 2px",
          width: "90px",
        }}
      >
        {`Day length: ${hours}h:${minutes}m:${seconds}s`}
      </text>
    );
  };

  return { CustomTooltip, CustomizedDot, CustomizedLabel };
};

export default useGraphCustom;
