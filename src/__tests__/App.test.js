import { render, screen } from "@testing-library/react";
import App from "../App";

jest.mock("../components/MapContainer", () => {
  return () => {
    return <div>Map Container</div>;
  };
});

jest.mock("../components/BookmarkNav", () => {
  return () => {
    return <div>Bookmark Nav</div>;
  };
});

jest.mock("../components/InfoLookup", () => {
  return () => {
    return <div>Info Lookup</div>;
  };
});

jest.mock("@esri/calcite-components-react", () => {
  return {
    CalciteShell: ({ children }) => <div>{children}</div>,
    CalciteShellPanel: ({ children }) => <div>{children}</div>,
    CalcitePanel: ({ children }) => <div>{children}</div>,
  };
});

test("renders learn react link", () => {
  const { getByText } = render(<App />);

  expect(getByText("Map Container")).toBeInTheDocument();
  expect(getByText("Bookmark Nav")).toBeInTheDocument();
  expect(getByText("Info Lookup")).toBeInTheDocument();
});
