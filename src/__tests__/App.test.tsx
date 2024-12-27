import { render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("render <App /> correctly", () => {
    const result = render(<App />);
    expect(result.container).toMatchSnapshot();
  });
});
