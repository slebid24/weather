import React from "react";
import Searching from "../searching/Searching";
import StaticMap from "components/staticMap/StaticMap";
// import DayLength from "components/dayLength/DayLength";
import BarChart from "components/dayGraph/GayGraph";

import "./secondarySide.scss";
import "../dayGraph/dayGraph.scss";

const SecondarySide: React.FC = () => {
  return (
    <section className="rightside">
      <div className="rightside-top">
        <Searching position={"right"} />
        <StaticMap />
      </div>

      {/* <DayLength /> */}

      <div className="day-graph">
        <BarChart />
      </div>
    </section>
  );
};

export default SecondarySide;
