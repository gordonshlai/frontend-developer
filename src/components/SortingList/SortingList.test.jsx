import { render, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import SortingList from "./SortingList";

describe("SortingList Component", () => {
  const sortedDeals = [
    { title: "Deal 1", price: "100", stars: 4 },
    { title: "Deal 2", price: "200", stars: 3 },
    { title: "Deal 3", price: "300", stars: 5 },
  ];

  const options = [
    {
      text: "alphabetically",
      Icon: () => {},
      sortingFunction: (a, b) => a.title.localeCompare(b.title),
    },
    {
      text: "price",
      Icon: () => {},
      sortingFunction: (a, b) => parseFloat(a.price.replace(",", "")) - parseFloat(b.price.replace(",", "")),
    },
    {
      text: "star rating",
      Icon: () => {},
      sortingFunction: (a, b) => b.stars - a.stars,
    },
  ];

  const setSortedDeals = vi.fn();

  it("SHOULD renders SortingList correctly with SortElement components", () => {
    const { getAllByTestId, getByTestId } = render(
      <SortingList sortedDeals={sortedDeals} setSortedDeals={setSortedDeals} />
    );

    expect(getByTestId("sorting-list")).toBeInTheDocument();
    expect(getAllByTestId(/sort-element/)).toHaveLength(3);
  });

  it("SHOULD calls setSortedDeals with sorted deals for each sorting option with expected sorting result", () => {
    const { getAllByTestId } = render(<SortingList sortedDeals={sortedDeals} setSortedDeals={setSortedDeals} />);

    const sortElements = getAllByTestId("sort-element");

    sortElements.forEach((sortElement, index) => {
      fireEvent.click(sortElement);
      const expectedSortedDeals = [...sortedDeals].sort(options[index].sortingFunction);
      expect(setSortedDeals).toHaveBeenCalledWith(expectedSortedDeals);
    });
  });
});
