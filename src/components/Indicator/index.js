import React from "react";

const Indicator = () => {
  const getIndicators = () => {
    let indicators = [];
    for (let index = 0; index < 12; index++) {
      indicators = [
        ...indicators,
        <span
          key={index}
          className="w-10 block h-full rounded-lg border-none	hover:border-solid border-2 border-orange-300"
        ></span>,
      ];
    }
    return indicators;
  };

  return (
    <div
      className="absolute h-full flex"
      style={{ width: "480px", top: "0", right: "36px" }}
    >
      {getIndicators()}
    </div>
  );
};

export default Indicator;
