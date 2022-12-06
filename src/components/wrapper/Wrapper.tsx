import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainSide from "../mainSide/MainSide";
import SecondarySide from "../secondarySide/SecondarySide";
// @ts-ignore
import { RootState } from "../../store/store";
// @ts-ignore
import RadioSpinner from "../spinner/RadioSpinner";
// @ts-ignore
import ErrorBoundry from "../../components/errorBoundry/ErrorBoundry";
import {
  initStatusSelector,
  cityNameSelector,
  weatherIconSelector,
  tempOfCurrentDaySelector,
  activeTypeSelector,
  weatherDescSelector,
} from "store/selectors";
import geoCodingService from "../../services/geoCoding";
import getPositionService from "../../services/deviceGeolocation";
import getWeatherDataService from "../../services/getWeatherData";
import { initCityLoaded, weatherData } from "./wrapperSlice";
import { DEFAULT_CITY } from "../../config/constants";
import { useParams } from "react-router-dom";
import { setLinksDef } from "data/helmetData";
import {
  ITypeOfInitialDonwloadingDepenFromRoute,
  GeoLocFromData,
} from "types/data";
// @ts-ignore
import { Helmet } from "react-helmet";
import { temperatureConverter } from "utilities/temperatureConverter";
import "./wrapper.scss";

const Wrapper: React.FC<ITypeOfInitialDonwloadingDepenFromRoute> = ({
  isEmptyLink,
}) => {
  const initStatus = useSelector<RootState, string>(initStatusSelector);
  const cityName = useSelector<RootState, GeoLocFromData>(cityNameSelector);
  const faviconLink = useSelector<RootState, string>(weatherIconSelector(0));
  const currentTemp = useSelector<RootState, number>(
    tempOfCurrentDaySelector(0)
  );
  const tempType = useSelector<RootState, string>(activeTypeSelector);
  const weatherDesc = useSelector<RootState, string>(weatherDescSelector(0));

  const dispatch = useDispatch();
  const { geodata } = useParams();

  const linksDef = setLinksDef(faviconLink);
  console.log(linksDef);
  const initialCityWithEmptyLink = async () => {
    try {
      const { latitude, longitude } = await getPositionService();
      const { lat, lon } = await geoCodingService(latitude, longitude);
      const data = await getWeatherDataService(lat, lon);
      dispatch(weatherData(data));
    } catch {
      const data = await getWeatherDataService(
        DEFAULT_CITY[0],
        DEFAULT_CITY[1]
      );
      dispatch(weatherData(data));
    } finally {
      dispatch(initCityLoaded());
    }
  };

  const initialCity = async (linkCoords: string) => {
    const regxp = /-?[0-9]+.[0-9]+/gm;
    const coord = linkCoords.match(regxp);

    try {
      const data = await getWeatherDataService(+coord[0], +coord[1]);
      dispatch(weatherData(data));
    } finally {
      dispatch(initCityLoaded());
    }
  };

  useEffect(() => {
    if (isEmptyLink) {
      initialCityWithEmptyLink();
    } else if (!isEmptyLink) {
      initialCity(geodata);
    }

    // eslint-disable-next-line
  }, []);

  return (
    <div className="wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${cityName}: ${temperatureConverter(currentTemp, tempType)}${
          tempType === "celsius" ? "℃" : "°F"
        }, ${weatherDesc} `}</title>

        {linksDef.map((definitions, index) => {
          return (
            <link
              rel={`${definitions[0]}`}
              sizes={`${definitions[1]}`}
              type={`${definitions[2]}`}
              href={`${definitions[3]}`}
              key={index}
            />
          );
        })}
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <div className="container">
        <div className="inner">
          {initStatus === "loading" ? (
            <RadioSpinner />
          ) : (
            <>
              <ErrorBoundry>
                <MainSide /> <SecondarySide />
              </ErrorBoundry>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
