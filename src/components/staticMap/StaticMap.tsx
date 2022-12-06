import React from "react";
import { useEffect, useState } from "react";
import googleMapService from "services/googleMapService";
import { useSelector } from "react-redux";
// @ts-ignore
import { RootState } from "../../store/store";
// @ts-ignore
import DotsSpinner from "../spinner/DotsSpinner";
import { GeoLocFromData } from "types/data";
import { coordSelector, cityPopulationSelector } from "store/selectors";
import "./staticMap.scss";

const StaticMap: React.FC = () => {
  const [mapImg, setMapImg] = useState<string>();

  const coord = useSelector<RootState, GeoLocFromData>(coordSelector);

  const cityPopulation = useSelector<RootState, number>(cityPopulationSelector);

  useEffect(() => {
    googleMapService(coord.lat, coord.lon, cityPopulation).then((url) => {
      setMapImg(url);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="static_map">
      {!mapImg ? (
        <DotsSpinner
          spinnerPosition={"secSide"}
          width={"100px"}
          height={"100px"}
        />
      ) : (
        <img src={mapImg} alt="map-location" className="static_map-img" />
      )}
    </div>
  );
};

export default StaticMap;
