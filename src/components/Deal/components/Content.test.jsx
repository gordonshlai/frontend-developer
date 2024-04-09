import { render } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import Content from "./Content";

describe("Content", () => {
  let data;
  beforeEach(() => {
    data = {
      adult: 3,
      child: 2,
      infant: 1,
      date: "3rd July 2019",
      duration: "7 days",
      departingFrom: "Manchester",
    };
  });

  it("SHOULD renders content correctly", () => {
    const { getByText } = render(<Content data={data} />);

    expect(getByText("adults")).toBeInTheDocument();
    expect(getByText("children")).toBeInTheDocument();
    expect(getByText("infant")).toBeInTheDocument();

    expect(getByText("3rd July 2019")).toBeInTheDocument();
    expect(getByText("for")).toBeInTheDocument();
    expect(getByText("7 days")).toBeInTheDocument();

    expect(getByText("departing from")).toBeInTheDocument();
    expect(getByText("Manchester")).toBeInTheDocument();
  });

  it("SHOULD NOT renders optional data if not provided", () => {
    data.adult = 0;
    const { queryByText, getByText } = render(<Content data={data} />);

    expect(queryByText("adults")).not.toBeInTheDocument();
    expect(getByText("children")).toBeInTheDocument();
    expect(getByText("infant")).toBeInTheDocument();

    expect(getByText("3rd July 2019")).toBeInTheDocument();
    expect(getByText("for")).toBeInTheDocument();
    expect(getByText("7 days")).toBeInTheDocument();

    expect(getByText("departing from")).toBeInTheDocument();
    expect(getByText("Manchester")).toBeInTheDocument();
  });

  it("SHOULD NOT renders optional data if not provided", () => {
    data.child = 0;
    const { queryByText, getByText } = render(<Content data={data} />);

    expect(getByText("adults")).toBeInTheDocument();
    expect(queryByText("children")).not.toBeInTheDocument();
    expect(getByText("infant")).toBeInTheDocument();

    expect(getByText("3rd July 2019")).toBeInTheDocument();
    expect(getByText("for")).toBeInTheDocument();
    expect(getByText("7 days")).toBeInTheDocument();

    expect(getByText("departing from")).toBeInTheDocument();
    expect(getByText("Manchester")).toBeInTheDocument();
  });
});

// we can also use test each for this case
