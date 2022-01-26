import moment from "moment-timezone";

import {
  formattedArea,
  formattedCity,
  formattedDate,
  formattedTime,
  getTimezoneDiffInHours,
  parseToTimezone,
} from "./methods";

describe("methods", () => {
  describe("formattedCity", () => {
    it("should return a formatted city", () => {
      expect(formattedCity("America/Mexico_City")).toBe("Mexico City");
    });

    it("should return the string when there is not an / in the timezone", () => {
      expect(formattedCity("America")).toBe("America");
    });
  });

  describe("formattedArea", () => {
    it("should return a formatted area", () => {
      expect(formattedArea("America/Mexico_City")).toBe("America");
    });

    it("should return an empty string when timezone is invalid", () => {
      expect(formattedArea("invalid_time_zone")).toBe("");
    });
  });

  describe("formattedDate", () => {
    it("should return a formatted 'ddd, MMM D' string", () => {
      expect(
        formattedDate("2022-01-25T21:39:16.028712-06:00", "America/Mexico_City")
      ).toBe("Tue, Jan 25");
    });
  });

  describe("formattedTime", () => {
    it("should return a formatted 'hh:mm A' string", () => {
      expect(
        formattedTime("2022-01-25T21:39:16.028712-06:00", "America/Mexico_City")
      ).toBe("09:39 pm");
    });
  });

  describe("parseToTimezone", () => {
    it("should return an moment instance", () => {
      expect(
        parseToTimezone(
          "2022-01-25T21:39:16.028712-06:00",
          "America/Mexico_City"
        )
      ).toBeInstanceOf(moment);
    });
  });

  describe("getTimezoneDiffInHours", () => {
    it("should the hours difference between 2 timezones", () => {
      expect(
        getTimezoneDiffInHours("America/Mexico_City", "Africa/Cairo")
      ).toBe(8);
    });
  });
});
