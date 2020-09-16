const Zone = require("../src/Zone");

const mockCanvas = {
  height: 0,
  width: 0, 
  textAlign: "",
  textBaseline: "",
  font: "",
  getContext: () => ({
    beginPath: () => {},
    moveTo: () => {},
    lineTo: () => {},
    closePath: () => {},
    stroke: () => {},
    fillText: () => {},
  })
}

test("Zone grid coordinates converted to a physical location correctly", () => {
  const zone1 = Zone({ ...mockCanvas, height: 600, width: 600 }, 12, 12);
  expect(zone1.getPhysicalLocation(0, 0)).toMatchSnapshot();
  expect(zone1.getPhysicalLocation(1, 1)).toMatchSnapshot();
  expect(zone1.getPhysicalLocation(12, 12)).toMatchSnapshot();
  expect(zone1.getPhysicalLocation(3, 5)).toMatchSnapshot();

  const zone2 = Zone({ ...mockCanvas, height: 800, width: 500 }, 10, 5);
  expect(zone2.getPhysicalLocation(0, 0)).toMatchSnapshot();
  expect(zone2.getPhysicalLocation(1, 1)).toMatchSnapshot();
  expect(zone2.getPhysicalLocation(3, 5)).toMatchSnapshot();
});

test("Zone grid coordinates converted to a physical location correctly. Error handling.", () => {
  const zone1 = Zone({ ...mockCanvas, height: 600, width: 600 }, 12, 12);
  expect(zone1.getPhysicalLocation(-3, 5)).toMatchSnapshot();

  const zone2 = Zone({ ...mockCanvas, height: 800, width: 500 }, 10, 5);
  expect(zone2.getPhysicalLocation(12, 12)).toMatchSnapshot();
  expect(zone2.getPhysicalLocation(-3, 5)).toMatchSnapshot();
});
