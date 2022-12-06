import React from "react";
import { DayLengthItemData } from "types/data";

const DayLengthItem: React.FC<DayLengthItemData> = ({
  astroClassName,
  astroTitle,
  astroDef,
}) => {
  return (
    <div className={`rightside_day-length-${astroClassName}`}>
      <img
        src={`astroIcons/${astroClassName}.svg`}
        alt={astroClassName}
        className={`rightside_day-length-${astroClassName}-img`}
      />
      <p className={`rightside_day-length-${astroClassName}-title`}>
        {astroTitle}
      </p>
      <p className={`rightside_day-length-${astroClassName}-def`}>{astroDef}</p>
    </div>
  );
};

export default DayLengthItem;
