import React from "react";

import { getTimezoneDiffInHours } from "../../utils/methods";

import Location from "../Location";
import Indicator from "../Indicator";

const Locations = ({ locations, onDelete }) => {
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
            />
          );
        })}
      <Indicator />
    </div>
  );
};

export default Locations;
