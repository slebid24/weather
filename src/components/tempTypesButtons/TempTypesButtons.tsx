import React from "react";
import "./tempTypesButtons.scss";
import { newType } from "./tempTypesButtonsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// @ts-ignore
import { RootState } from "../../store/store";
import { activeTypeSelector } from "store/selectors";
const TempTypesButtons: React.FC = () => {
  const dispatch = useDispatch();
  const activeType = useSelector<RootState, string>(activeTypeSelector);

  return (
    <div className="leftside_temp-buttons">
      <div className="leftside_temp-buttons-inner">
        <button
          className={`leftside_temp-buttons-f ${
            activeType === "fahrenheit" ? "leftside_temp-buttons-active" : ""
          }`}
          onClick={() => dispatch(newType("fahrenheit"))}
        >
          F
        </button>

        <button
          className={`leftside_temp-buttons-c ${
            activeType === "celsius" ? "leftside_temp-buttons-active" : ""
          }`}
          onClick={() => dispatch(newType("celsius"))}
        >
          C
        </button>
      </div>
    </div>
  );
};

export default TempTypesButtons;
