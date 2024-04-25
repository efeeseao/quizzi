import { render } from "@testing-library/react";
import Button from ".";

describe("Button", () => {
  it("should render correctly", () => {
    render(<Button text="oi" onClick={function (): void {
      throw new Error("Function not implemented.");
    } } disabled={false} />);
  });
});
