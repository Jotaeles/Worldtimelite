import moment from "moment-timezone";

export const formattedCity = (timezone) => {
  const timezoneArray = timezone.split("/");
  return timezoneArray.length > 1
    ? timezoneArray[1].split("_").join(" ")
    : timezoneArray[0];
};

export const formattedArea = (timezone) => {
  const timezoneArray = timezone.split("/");
  return timezoneArray.length > 1 ? timezoneArray[0] : "";
};

export const formattedTime = (datetime, timezone) => {
  return moment.tz(datetime, timezone).format("hh:mm A").toLowerCase();
};

export const formattedDate = (datetime, timezone) => {
  return moment.tz(datetime, timezone).format("ddd, MMM D");
};

export const parseToTimezone = (datetime, timezone) => {
  return moment.tz(datetime, timezone);
};

export const getTimezoneDiffInHours = (defaultTimezone, timezone) => {
  const now = moment.utc();
  const timezoneOffset = moment.tz.zone(defaultTimezone).utcOffset(now);
  const targetTimezoneOffset = moment.tz.zone(timezone).utcOffset(now);
  return (timezoneOffset - targetTimezoneOffset) / 60;
};
