import { render } from "@testing-library/react";
import MapContainer from "../../components/MapContainer";

// Mock out ArcGIS components
jest.mock("@arcgis/core/WebMap", () => {
  return jest.fn().mockImplementation(() => {
    return {
      bookmarks: ["bookmark1"],
    };
  });
});

// Callback function to test "goTo" method
const mockGoToCallback = jest.fn();
jest.mock("@arcgis/core/views/MapView", () => {
  return jest.fn().mockImplementation((webMap) => {
    return {
      map: webMap,
      // Make "when" execute immediately for testing
      when: (cb) => cb(),
      // change goTo to a callback to check the value passed to it
      goTo: (viewpoint) => mockGoToCallback(viewpoint),
    };
  });
});

// Tests
test("it calls onMapLoad", () => {
  const callback = jest.fn();

  render(<MapContainer onMapLoad={callback} selectedBookmark={null} />);

  expect(callback).toBeCalled();
});

test("it goes to the selected bookmark", () => {
  const callback = jest.fn();
  const bookmark = {
    viewpoint: "abc",
  };

  render(<MapContainer onMapLoad={callback} selectedBookmark={bookmark} />);

  expect(mockGoToCallback).toBeCalledWith("abc");
});
