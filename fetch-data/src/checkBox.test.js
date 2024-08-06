import { fireEvent, render } from "@testing-library/react";

import { Check } from "./checkBox"


test("select checkbox", () => {
    const { getByLabelText } = render(<Check />)
    const checkBox = getByLabelText(/not checked/i); //puts element that matches regex to checkBox

    fireEvent.click(checkBox);
    expect(checkBox.checked).toEqual(true);

})