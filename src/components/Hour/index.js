import React from "react";

const Hour = ({ hour, isFirst = false }) => {
  const { type, value, color } = hour;

  let colorClass = "bg-gray-200";
  let fontColorClass = "";
  if (color === "black") {
    colorClass = "bg-gray-700";
    fontColorClass = "text-white";
  } else if (color === "blue") {
    colorClass = "bg-sky-200";
  }

  const fontSizeClass = isFirst ? "text-xs" : "text-sm";
  return (
    <div
      className={`p-2 flex flex-col items-center ${colorClass} ${fontColorClass}`}
      style={{ width: "40px", minWidth: "40px" }}
    >
      <div className={`font-bold ${fontSizeClass}`}>{value}</div>
      <div className="text-xs">{type}</div>
    </div>
  );
};

export default Hour;
