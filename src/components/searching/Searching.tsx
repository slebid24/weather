import React from "react";
import { useState, useEffect } from "react";
// @ts-ignore
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
// @ts-ignore
import { findFlagUrlByIso2Code } from "country-flags-svg";
import { useDispatch } from "react-redux";
import { useDebounce } from "use-debounce";
import {
  newQueryLoading,
  weatherData,
  initCityLoaded,
} from "../wrapper/wrapperSlice";
import getWeatherDataService from "../../services/getWeatherData";
// @ts-ignore
import { RootState } from "../../store/store";
import { ComponentPosition, ICitySearchingData } from "../../types/data";
import { replaceShit } from "utilities/extra";
import citySearchingService from "../../services/citySearching";
import { cityNameSelector } from "store/selectors";
import { Link } from "react-router-dom";

import "./searching.scss";

const Searching: React.FC<ComponentPosition> = ({ position }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [dropDownCities, setDropDownCities] = useState<ICitySearchingData[]>(
    []
  );
  const [value] = useDebounce(input, 700);
  const dispatch = useDispatch();
  const cityName = useSelector<RootState, string>(cityNameSelector);

  const onCityHandler = (lat: number, lon: number) => {
    dispatch(newQueryLoading());
    getWeatherDataService(lat, lon)
      .then((data) => {
        dispatch(weatherData(data));
      })
      .finally(() => dispatch(initCityLoaded()));
  };

  const inputStatusHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsOpen(!isOpen);
  };

  const citySearhHandler = (city: string) => {
    if (city.length > 1) {
      citySearchingService(city).then((data) => setDropDownCities(data));
    }
  };

  useEffect(() => {
    citySearhHandler(value);
  }, [value]);

  const basicCheckConditionForUI =
    dropDownCities.length > 1 && isOpen && input.length > 1;

  return (
    <div
      className={`searching searching-${position} ${
        isOpen ? "searching-input-style" : ""
      } ${basicCheckConditionForUI ? "searching-input-style-active" : ""}`}
    >
      {isOpen ? (
        <input
          type="text"
          className={`rightside-searching-input searching-input${
            basicCheckConditionForUI ? "-active" : ""
          }`}
          onChange={(event) => setInput(event.target.value)}
          placeholder={"Your city..."}
        />
      ) : (
        <div className="searching-city ">{cityName}</div>
      )}
      <div className="searching-dropdown" tabIndex={1}>
        {basicCheckConditionForUI
          ? dropDownCities.map((item) => {
              return (
                <Link
                  to={`/${item.lat}&${item.lon}`}
                  className="searching-dropdown-item"
                  key={uuidv4()}
                  onClick={() => onCityHandler(item.lat, item.lon)}
                >
                  <p className="searching-dropdown-item-city">{`${item.name}${
                    item.state ? `, ${item.state}` : ""
                  }`}</p>
                  <div className="searching-dropdown-item-flag">
                    <img
                      src={findFlagUrlByIso2Code(replaceShit(item.country))}
                      alt={item.country}
                    />
                  </div>
                </Link>
              );
            })
          : null}
      </div>
      <button
        className={`searching-button-${isOpen ? "close" : "open"} ${
          basicCheckConditionForUI ? "searching-button-close-active" : ""
        }`}
        onClick={inputStatusHandler}
      ></button>
    </div>
  );
};

export default Searching;
