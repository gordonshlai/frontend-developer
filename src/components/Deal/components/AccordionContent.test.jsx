import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AccordionContent from "./AccordionContent";

describe("AccordionContent Component", () => {
  it("renders accordion content correctly", () => {
    const overview = "This is the overview content.";
    const { getByText, getByRole } = render(<AccordionContent overview={overview} />);

    const heading = getByRole("heading", { name: /overview/i });
    expect(heading).toBeInTheDocument();
    expect(heading.tagName.toLowerCase()).toBe("h1");
    expect(heading.className).toContain("heading");

    const overviewContent = getByText(overview);
    expect(overviewContent).toBeInTheDocument();
  });
});
