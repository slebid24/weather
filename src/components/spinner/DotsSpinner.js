const DotsSpinner = ({ spinnerPosition, width, height }) => {
  return (
    <>
      <div className={`spinner-${spinnerPosition}`}>
        <div className={`spinner-${spinnerPosition}-inner`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ margin: "auto", display: "block", shapeRendering: "auto" }}
            width={width}
            height={height}
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <circle
              cx="50"
              cy="50"
              r="25"
              strokeWidth="8"
              stroke="#ffffff"
              strokeDasharray="39.269908169872416 39.269908169872416"
              fill="none"
              strokeLinecap="round"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="0.8264462809917356s"
                keyTimes="0;1"
                values="0 50 50;360 50 50"
              ></animateTransform>
            </circle>
          </svg>
        </div>
      </div>
    </>
  );
};

export default DotsSpinner;
