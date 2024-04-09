import { render, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Deal from "./Deal";

describe("Deal Component", () => {
  const dealData = {
    img: "example.jpg",
    title: "Example Deal",
    address: "Example Address",
    stars: 4,
    adult: 3,
    child: 2,
    infant: 1,
    date: "3rd July 2019",
    duration: "7 days",
    departingFrom: "Manchester",
    price: 1000,
    overview: "This is an example overview.",
  };

  it("SHOULD renders deal correctly", () => {
    const { getByText, getByRole, getAllByTestId, getByTestId } = render(<Deal deal={dealData} />);

    expect(getByRole("img")).toHaveAttribute("src", dealData.img);
    expect(getByText(dealData.title)).toBeInTheDocument();
    expect(getByText(dealData.address)).toBeInTheDocument();
    expect(getAllByTestId(/star/)).toHaveLength(4);
    expect(getByText(/adults/)).toBeInTheDocument();
    expect(getByText(/child/)).toBeInTheDocument();
    expect(getByText(/infant/)).toBeInTheDocument();
    expect(getByText(dealData.date)).toBeInTheDocument();
    expect(getByText(dealData.duration)).toBeInTheDocument();
    expect(getByText(dealData.departingFrom)).toBeInTheDocument();
    expect(getByRole("button")).toBeInTheDocument();
    expect(getByText("Book now")).toBeInTheDocument();
    expect(getByTestId("accordion-button")).toBeInTheDocument();
  });

  it("SHOULD displays AccordionContent when AccordionButton is clicked", () => {
    const { getByTestId, queryByText } = render(<Deal deal={dealData} />);

    expect(queryByText(dealData.overview)).not.toBeInTheDocument();
    fireEvent.click(getByTestId("accordion-button"));
    expect(queryByText(dealData.overview)).toBeInTheDocument();
    fireEvent.click(getByTestId("accordion-button"));
    expect(queryByText(dealData.overview)).not.toBeInTheDocument();
  });
});
