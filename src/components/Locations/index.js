import React, { useState, useEffect } from "react";

import { getTimezoneDiffInHours } from "../../utils/methods";

import Location from "../Location";
import Indicator from "../Indicator";

import { HOURS_WIDTH } from "../../constants/commons";

const Locations = ({ locations, onDelete }) => {
  const [nextHours, setNextHours] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [disabledArrow, setDisabledArrow] = useState(false);

  const handleNextHours = () => {
    setNextHours(nextHours + 1);
    setDisabledArrow(true);
  };

  useEffect(() => {
    if (nextHours > 0) {
      setTranslate(HOURS_WIDTH * nextHours);
    }
  }, [nextHours]);

  return (
    <div className="grid gap-y-8 relative">
      {locations.length > 0 &&
        locations.map((location, index) => {
          const { timezone } = location;
          let disabled = locations.length === 1;
          let isFirst = index === 0;
          const diffInHours =
            !isFirst && getTimezoneDiffInHours(locations[0].timezone, timezone);
          return (
            <Location
              key={timezone}
              location={location}
              isFirst={isFirst}
              diffInHours={diffInHours}
              onDelete={onDelete}
              disabled={disabled}
              disabledArrow={disabledArrow}
              translate={translate}
              handleNextHours={handleNextHours}
            />
          );
        })}
      <Indicator />
    </div>
  );
};

export default Locations;
