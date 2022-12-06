const RadioSpinner = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ margin: "auto", display: "block", shapeRendering: "auto" }}
      width="180px"
      height="180px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle cx="28" cy="75" r="11" fill="#ffffff">
        <animate
          attributeName="fill-opacity"
          repeatCount="indefinite"
          dur="0.7092198581560283s"
          values="0;1;1"
          keyTimes="0;0.2;1"
          begin="0s"
        ></animate>
      </circle>

      <path
        d="M28 47A28 28 0 0 1 56 75"
        fill="none"
        stroke="#ffffff"
        strokeWidth="10"
      >
        <animate
          attributeName="stroke-opacity"
          repeatCount="indefinite"
          dur="0.7092198581560283s"
          values="0;1;1"
          keyTimes="0;0.2;1"
          begin="0.07092198581560283s"
        ></animate>
      </path>
      <path
        d="M28 25A50 50 0 0 1 78 75"
        fill="none"
        stroke="#ffffff"
        strokeWidth="10"
      >
        <animate
          attributeName="stroke-opacity"
          repeatCount="indefinite"
          dur="0.7092198581560283s"
          values="0;1;1"
          keyTimes="0;0.2;1"
          begin="0.14184397163120566s"
        ></animate>
      </path>
    </svg>
  );
};

export default RadioSpinner;
