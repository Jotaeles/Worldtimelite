import React from "react";
import {
  formattedCity,
  formattedTime,
  formattedDate,
  formattedArea,
  parseToTimezone,
} from "../../utils/methods";

import Home from "../svgs/Home";
import Arrow from "../svgs/Arrow";
import Trash from "../svgs/Trash";
import Hours from "../Hours";

const Location = ({ location, isFirst, diffInHours, onDelete, disabled }) => {
  const { abbreviation, timezone, datetime } = location;
  const trashClass = disabled
    ? "cursor-default text-gray-200 pointer-events-none"
    : "cursor-pointer";

  const day = parseToTimezone(datetime, timezone).format("D");
  const ampm = parseToTimezone(datetime, timezone).format("a");
  const month = parseToTimezone(datetime, timezone).format("MMM").toUpperCase();
  const hour = parseToTimezone(datetime, timezone).format("h");

  return (
    <div className="flex items-center gap-x-4 text-sm">
      <Trash
        className={`w-5 h-5 cursor-pointer ${trashClass}`}
        onClick={() => onDelete(timezone)}
      />
      <div className="rounded-full w-10 h-10 bg-gray-200 flex justify-center items-center">
        {isFirst ? (
          <Home className="w-5 h-5" />
        ) : (
          <div className="text-sm font-bold">{diffInHours}</div>
        )}
      </div>
      <div className="flex flex-col w-40">
        <h2 className="font-bold mb-1">{formattedCity(timezone)}</h2>
        <h3 className="text-xs">{formattedArea(timezone)}</h3>
      </div>
      <div className="flex flex-col text-right w-40">
        <div className="font-bold mb-1">
          {formattedTime(datetime, timezone)} {abbreviation}
        </div>
        <div className="text-xs">{formattedDate(datetime, timezone)}</div>
      </div>
      <div style={{ width: "480px" }}>
        <Hours day={day} month={month} hr={hour} ampm={ampm} />
      </div>
      <Arrow className="w-5 h-5 cursor-pointer" />
    </div>
  );
};

export default Location;
