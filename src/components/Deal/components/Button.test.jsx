import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Button from "./Button";

describe("Button Component", () => {
  it("SHOULD renders button with price correctly", () => {
    const price = 10;
    const { getByText, getByRole } = render(<Button price={price} />);

    expect(getByRole("button")).toBeInTheDocument();
    expect(getByText("Book now")).toBeInTheDocument();
    expect(getByText(`£ ${price}`)).toBeInTheDocument();
  });
});
