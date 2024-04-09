import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Stars from "./Stars";

describe("Stars", () => {
  it("SHOULD render number of stars correctly", () => {
    const { getAllByTestId } = render(<Stars stars={4} />);
    const starIcons = getAllByTestId(/star/i);
    expect(starIcons).toHaveLength(4);
  });
});
