import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import DealList from "./DealList";
import deals from "../data/deals";

describe("DealList Component", () => {
  it("SHOULD renders a list of Deal components with correct props", () => {
    const { getAllByTestId, getByText } = render(<DealList sortedDeals={deals} />);

    const dealComponents = getAllByTestId("deal-component");
    expect(dealComponents).toHaveLength(deals.length);

    dealComponents.forEach((_, index) => {
      const { title } = deals[index];
      expect(getByText(title)).toBeInTheDocument();
    });
  });

  it("SHOULD renders an empty list of Deal components when data is not provided", () => {
    const { queryAllByTestId } = render(<DealList sortedDeals={[]} />);

    const dealComponents = queryAllByTestId("deal-component");
    expect(dealComponents).toHaveLength(0);
  });
});
