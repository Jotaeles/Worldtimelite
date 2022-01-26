import React from "react";

import Hour from "../Hour";
import { HOURS } from "../../constants/commons";

const Hours = ({ nextDay, hr, ampm, day, month, translate }) => {
  const firstHour = { type: day, value: month, color: "black" };
  const nextFirstHour = {
    type: nextDay.format("D"),
    value: nextDay.format("MMM").toUpperCase(),
    color: "black",
  };
  const midnight = hr === "12" && ampm === "am";
  let index;
  HOURS.forEach((h, idx) => {
    if (h.value === Number(hr) && ampm === h.type) {
      index = idx;
    }
  });

  const widthFirstDay = (23 - index) * 40;
  return (
    <>
      <div
        className="flex rounded-lg overflow-hidden transition-all"
        style={{
          minWidth: `${widthFirstDay}px`,
          transform: `translateX(-${translate}px)`,
        }}
      >
        {midnight && <Hour isFirst hour={firstHour} />}
        {HOURS.map((hour, i) => {
          if (i >= index) {
            return <Hour key={i} hour={hour} />;
          } else {
            return null;
          }
        })}
      </div>
      <div
        className="flex rounded-lg overflow-hidden transition-all"
        style={{ minWidth: "960px", transform: `translateX(-${translate}px)` }}
      >
        <Hour isFirst hour={nextFirstHour} />
        {HOURS.map((hour, i) => (
          <Hour key={i} hour={hour} />
        ))}
      </div>
    </>
  );
};

export default Hours;
