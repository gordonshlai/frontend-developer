import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App Component", () => {
  it("SHOULD renders App correctly with SortingList and DealList", () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId("app-container")).toBeInTheDocument();
    expect(getByTestId("sorting-list")).toBeInTheDocument();
    expect(getByTestId("deal-list")).toBeInTheDocument();
  });
});
