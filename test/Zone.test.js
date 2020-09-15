const Zone = require("../src/Zone");

test("Block size is calculated correctly", () => {
  const zone1 = Zone(12, 12, 600, 600);
  expect(zone1.getBlockWidth()).toBe(50);
  expect(zone1.getBlockHeight()).toBe(50);

  const zone2 = Zone(10, 5, 800, 500);
  expect(zone2.getBlockWidth()).toBe(80);
  expect(zone2.getBlockHeight()).toBe(100);
});

test("Zone grid coordinates converted to a physical location correctly", () => {
  const zone1 = Zone(12, 12, 600, 600);
  expect(zone1.getPhysicalLocation(0, 0)).toEqual({ x: 0, y: 0 });
  expect(zone1.getPhysicalLocation(1, 1)).toEqual({ x: 50, y: 50 });
  expect(zone1.getPhysicalLocation(12, 12)).toEqual({ x: 600, y: 600 });
  expect(zone1.getPhysicalLocation(3, 5)).toEqual({ x: 150, y: 250 });

  const zone2 = Zone(10, 5, 800, 500);
  expect(zone2.getPhysicalLocation(0, 0)).toEqual({ x: 0, y: 0 });
  expect(zone2.getPhysicalLocation(1, 1)).toEqual({ x: 80, y: 100 });
  expect(zone2.getPhysicalLocation(3, 5)).toEqual({ x: 240, y: 500 });
});

test("Zone grid coordinates converted to a physical location correctly. Error handling.", () => {
  const zone1 = Zone(12, 12, 600, 600);
  expect(zone1.getPhysicalLocation(-3, 5)).toEqual({ x: 0, y: 250 });

  const zone2 = Zone(10, 5, 800, 500);
  expect(zone2.getPhysicalLocation(12, 12)).toEqual({ x: 800, y: 500 });
  expect(zone2.getPhysicalLocation(-3, 5)).toEqual({ x: 0, y: 500 });
});
