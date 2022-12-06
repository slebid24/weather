import React from "react";
import WeatherDefItem from "../weatherDefItem/WeatherDefItem";
import { ComponentPosition } from "../../types/data";
import "./weatherDef.scss";
// @ts-ignore
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import {
  pressureDefSelector,
  humDefSelector,
  windDefSelector,
  cloudDefSelector,
} from "store/selectors";

const WeatherDef: React.FC<ComponentPosition> = ({ position }) => {
  const pressureDef = useSelector<RootState, number>(pressureDefSelector(0));
  const humDef = useSelector<RootState, number>(humDefSelector(0));
  const windDef = useSelector<RootState, number>(windDefSelector(0));
  const cloudDef = useSelector<RootState, number>(cloudDefSelector(0));

  // transform to enum
  const listOfPhenomens: (string | number)[][] = [
    ["Wind", windDef],
    ["Humidity", humDef],
    ["Cloudiness", cloudDef],
    ["Pressure", pressureDef],
  ];

  return (
    <div className={`${position}_def`}>
      {listOfPhenomens.map((phenomen, index) => {
        return (
          <WeatherDefItem
            position={position}
            phenomen={phenomen[0]}
            defenition={phenomen[1]}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default WeatherDef;
