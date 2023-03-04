import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookmarkNav from "../../components/BookmarkNav";

// Mock Calcite components with standard HTML requivalents
jest.mock("@esri/calcite-components-react", () => {
  return {
    CalciteSelect: ({ onCalciteSelectChange, children }) => (
      <select data-testid="select" onChange={onCalciteSelectChange}>
        {children}
      </select>
    ),
    CalciteOption: ({ value, children }) => (
      <option data-testid="select-option" value={value.name}>
        {children}
      </option>
    ),
  };
});

test("it should call onSelection when selected", async () => {
  const testSelection = jest.fn().mockReturnValue(undefined);
  const selectMe = { name: "select me please" };
  const bookmarks = [
    { name: "first bookmark" },
    { name: "second bookmark" },
    selectMe,
    { name: "last bookmark" },
  ];

  const { getByTestId, getAllByTestId } = render(
    <BookmarkNav
      bookmarks={bookmarks}
      onSelection={(...args) => testSelection(...args)}
    />
  );

  const select = getByTestId("select");
  const options = getAllByTestId("select-option");

  expect(options[0].selected).toBeTruthy();
  expect(options[2].selected).toBeFalsy();

  userEvent.selectOptions(select, selectMe.name);

  expect(testSelection).toBeCalledTimes(1);
  expect(options[2].selected).toBeTruthy();
  expect(testSelection.mock.lastCall[0]).toBe(selectMe.name);
});
