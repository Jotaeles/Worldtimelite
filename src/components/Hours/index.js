import React from "react";

import Hour from "../Hour";

const Hours = ({ hr, ampm, day, month }) => {
  const firstHour = { type: day, value: month, color: "black" };
  const hours = [
    { type: "am", value: 1, color: "black" },
    { type: "am", value: 2, color: "black" },
    { type: "am", value: 3, color: "black" },
    { type: "am", value: 4, color: "black" },
    { type: "am", value: 5, color: "black" },
    { type: "am", value: 6, color: "blue" },
    { type: "am", value: 7, color: "blue" },
    { type: "am", value: 8, color: "normal" },
    { type: "am", value: 9, color: "normal" },
    { type: "am", value: 10, color: "normal" },
    { type: "am", value: 11, color: "normal" },
    { type: "pm", value: 12, color: "normal" },
    { type: "pm", value: 1, color: "normal" },
    { type: "pm", value: 2, color: "normal" },
    { type: "pm", value: 3, color: "normal" },
    { type: "pm", value: 4, color: "normal" },
    { type: "pm", value: 5, color: "normal" },
    { type: "pm", value: 6, color: "blue" },
    { type: "pm", value: 7, color: "blue" },
    { type: "pm", value: 8, color: "blue" },
    { type: "pm", value: 9, color: "black" },
    { type: "pm", value: 10, color: "black" },
    { type: "pm", value: 11, color: "black" },
  ];

  const midnight = hr === "12" && ampm === "am";

  let index;
  hours.forEach((h, idx) => {
    if (h.value === Number(hr) && ampm === h.type) {
      index = idx;
    }
  });

  return (
    <div className="flex rounded-lg bg-gray-200 overflow-hidden">
      {midnight && <Hour isFirst hour={firstHour} />}
      {hours.map((hour, i) => {
        if (i >= index) {
          return <Hour key={i} hour={hour} />;
        } else {
          return null;
        }
      })}
      {
        // Aqui va
      }
    </div>
  );
};

export default Hours;
