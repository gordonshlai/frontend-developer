import { render, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import SortElement from "./SortElement";

describe("SortElement Component", () => {
  const option = {
    text: "price",
    Icon: () => <div data-testid="icon">Icon</div>,
  };

  const selectedOption = {
    text: "star rating",
    Icon: () => <div>Icon</div>,
  };

  const onClick = vi.fn();

  it("SHOULD renders SortElement correctly with inactive state", () => {
    const { getByText, getByTestId } = render(
      <SortElement option={option} selected={selectedOption} onClick={onClick} />
    );

    expect(getByText("sort")).toBeInTheDocument();
    expect(getByText("by")).toBeInTheDocument();
    expect(getByText("price")).toBeInTheDocument();

    expect(getByTestId("icon")).toBeInTheDocument();
    const container = getByTestId("sort-element");
    expect(container).toHaveClass(/inactive/);
  });

  it("SHOULD renders SortElement correctly with active state", () => {
    const { getByTestId } = render(<SortElement option={option} selected={option} onClick={onClick} />);

    const container = getByTestId("sort-element");
    expect(container).toHaveClass(/active/);
  });

  it("SHOULD calls onClick when clicked", () => {
    const { getByTestId } = render(<SortElement option={option} selected={selectedOption} onClick={onClick} />);

    fireEvent.click(getByTestId("sort-element"));
    expect(onClick).toHaveBeenCalled();
  });
});
