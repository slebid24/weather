import React from "react";
import { WeatherDefCompilation } from "types/data";
import { unit } from "../../utilities/typesOfUnits";

const WeatherDefItem: React.FC<WeatherDefCompilation> = ({
  position,
  phenomen,
  defenition,
}) => {
  return (
    <div className={`${position}_def-${phenomen}`}>
      <img
        src={`/weatherDefIcons/${phenomen}.svg`}
        alt=""
        className={`${position}_def-${phenomen}-img`}
      />
      <p className={`${position}_def-${phenomen}-title`}>{phenomen}</p>
      <p className={`${position}_def-${phenomen}-def`}>
        {defenition} {unit(phenomen)}
      </p>
    </div>
  );
};

export default WeatherDefItem;
