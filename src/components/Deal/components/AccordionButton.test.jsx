import { render, fireEvent } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import AccordionButton from "./AccordionButton";

describe("AccordionButton Component", () => {
  let isOverviewVisible, setIsOverviewVisible, component;

  beforeEach(() => {
    isOverviewVisible = false;
    setIsOverviewVisible = vi.fn();
    component = render(
      <AccordionButton isOverviewVisible={isOverviewVisible} setIsOverviewVisible={setIsOverviewVisible} />
    );
  });

  it('SHOULD renders "Read more" button when overview is not visible', () => {
    const { getByText, getByTestId } = component;

    expect(getByText("Read more")).toBeInTheDocument();
    expect(getByTestId("chevron-right-icon")).toBeInTheDocument();
  });

  it('SHOULD renders "Read less" button when overview is visible', () => {
    const isOverviewVisible = true;

    component.rerender(
      <AccordionButton isOverviewVisible={isOverviewVisible} setIsOverviewVisible={setIsOverviewVisible} />
    );

    const { getByText, getByTestId } = component;

    expect(getByText("Read less")).toBeInTheDocument();
    expect(getByTestId("chevron-down-icon")).toBeInTheDocument();
  });

  it("SHOULD triggers setIsOverviewVisible when clicked", () => {
    const { getByTestId } = component;

    fireEvent.click(getByTestId("accordion-button"));
    expect(setIsOverviewVisible).toHaveBeenCalledWith(true);
  });
});
