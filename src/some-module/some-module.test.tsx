import React from "react";
import { render, screen } from "@testing-library/react";

import { SomeModule } from "@some-module/some-module";

test("Renders the component", () => {
    render(<SomeModule />);
    expect(
        screen.queryByText("This is a react component!"),
    ).toBeInTheDocument();
});
