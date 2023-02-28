import { render } from "@testing-library/react";
import SnapshotRenderer from "react-test-renderer";
import InfoLookup from "./InfoLookup";
import { parkLookup } from "../api/parkLookup";

// Mock out Calcite components
jest.mock("@esri/calcite-components-react", () => {
  return {
    CalciteBlock: ({ children, heading }) => (
      <div>
        <div>{heading}</div>
        <div>{children}</div>
      </div>
    ),
    CalciteNotice: ({ children }) => <div>{children}</div>,
  };
});

// Mock parkLookup so we can controll rendering
jest.mock("../api/parkLookup");

test("snapshot test", () => {
  parkLookup.mockResolvedValue("parkInfo");

  const tree = SnapshotRenderer.create(<InfoLookup currentBookmark={null} />).toJSON();

  expect(tree).toMatchSnapshot();
});

// Unit tests
test("It renders without a bookmark", () => {
  const { getByText } = render(<InfoLookup currentBookmark={null} />);

  expect(getByText("Select a bookmark")).toBeInTheDocument();
  expect(getByText("to get more information")).toBeInTheDocument();
  expect(parkLookup).not.toBeCalled();
});

test("It updates with the given bookmark", async () => {
  const bookmark = {
    name: "theBookmark",
  };

  parkLookup.mockResolvedValue("Page Info");

  const { getByText, findByText } = render(<InfoLookup currentBookmark={bookmark} />);

  await findByText("theBookmark");

  expect(getByText("Page Info")).toBeInTheDocument();
  expect(parkLookup).toBeCalledWith("theBookmark");
});

test("It shows an error message", async () => {
  const bookmark = {
    name: "theBookmark",
  };

  parkLookup.mockRejectedValue("An Error!");

  const { getByText, findByText } = render(<InfoLookup currentBookmark={bookmark} />);

  await findByText("Exception getting info");

  expect(getByText("Check console for details")).toBeInTheDocument();
  expect(parkLookup).toBeCalledWith("theBookmark");
});
