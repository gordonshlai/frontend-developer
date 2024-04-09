import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Heading from "./Heading";

describe("Heading", () => {
  it("SHOULD render heading correctly", () => {
    const { getByText } = render(<Heading>Hello</Heading>);
    expect(getByText("Hello")).toBeInTheDocument();
  });
});
