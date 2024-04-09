import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Text from "./Text";

describe("Text", () => {
  it("SHOULD render text correctly", () => {
    const { getByText } = render(<Text>Hello</Text>);
    expect(getByText("Hello")).toBeInTheDocument();
  });
});
