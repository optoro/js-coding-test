import { VendorMachine } from "./vending-machine";

describe("Vending Machine Step 3", () => {
  it("initializes", () => {
    expect(new VendorMachine(1, 2)).toBeDefined();
  });
});
