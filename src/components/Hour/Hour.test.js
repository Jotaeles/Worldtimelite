import { render, screen } from "@testing-library/react";

import Hour from "./index";

describe("Hour", () => {
  it("should render the component", () => {
    render(
      <Hour
        hour={{
          type: "am",
          value: 1,
          color: "black",
        }}
      />
    );

    const hourText = screen.getByText(/^1$/i);
    expect(hourText).toBeInTheDocument();

    const typeText = screen.getByText(/^am$/i);
    expect(typeText).toBeInTheDocument();
  });

  describe("isFirst behavior", () => {
    it("should add 'text-xs' class when isFirst", () => {
      render(
        <Hour
          hour={{
            type: "am",
            value: 1,
            color: "black",
          }}
          isFirst
        />
      );

      const hourText = screen.getByText(/^1$/i);
      expect(hourText).toHaveClass("text-xs");
    });

    it("should add 'text-sm' class when isFirst is falsy", () => {
      render(
        <Hour
          hour={{
            type: "am",
            value: 1,
            color: "black",
          }}
        />
      );

      const hourText = screen.getByText(/^1$/i);
      expect(hourText).toHaveClass("text-sm");
    });
  });

  describe("color behavior", () => {
    it("should add 'bg-gray-700' and 'text-white' class when color is black", () => {
      render(
        <Hour
          hour={{
            color: "black",
          }}
        />
      );

      expect(screen.getByTestId("hour-container")).toHaveClass("text-white");
      expect(screen.getByTestId("hour-container")).toHaveClass("bg-gray-700");
    });

    it("should add 'bg-sky-200' class when color is blue", () => {
      render(
        <Hour
          hour={{
            color: "blue",
          }}
        />
      );

      expect(screen.getByTestId("hour-container")).toHaveClass("bg-sky-200");
    });
  });
});
