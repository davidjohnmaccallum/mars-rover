const Rover = require("../src/Rover");
const Zone = require("../src/Zone");

test("Start position and orientation is correct.", () => {
  const zone = Zone(12, 12, 600, 600);
  const rover = Rover(zone, 0, 0, "E");
  expect(rover.getGridPositionX()).toBe(0);
  expect(rover.getGridPositionY()).toBe(0);
  expect(rover.getOrientation()).toBe("E");
});

test("Rotation works.", () => {
  const zone = Zone(12, 12, 600, 600);
  const rover = Rover(zone, 0, 0, "E");
  expect(rover.getOrientation()).toBe("E");

  rover.rotateLeft();
  expect(rover.getOrientation()).toBe("N");
  rover.rotateLeft();
  expect(rover.getOrientation()).toBe("W");
  rover.rotateLeft();
  expect(rover.getOrientation()).toBe("S");
  rover.rotateLeft();
  expect(rover.getOrientation()).toBe("E");

  rover.rotateRight();
  expect(rover.getOrientation()).toBe("S");
  rover.rotateRight();
  expect(rover.getOrientation()).toBe("W");
  rover.rotateRight();
  expect(rover.getOrientation()).toBe("N");
  rover.rotateRight();
  expect(rover.getOrientation()).toBe("E");
});

test("Position correct after move.", () => {
  const zone = Zone(12, 12, 600, 600);
  const rover = Rover(zone, 0, 0, "E");

  rover.move();
  expect(rover.getGridPositionX()).toBe(1);
  expect(rover.getGridPositionY()).toBe(0);

  rover.rotateLeft();
  expect(rover.getOrientation()).toBe("N");
  rover.move();
  expect(rover.getGridPositionX()).toBe(1);
  expect(rover.getGridPositionY()).toBe(1);

  rover.rotateLeft();
  expect(rover.getOrientation()).toBe("W");
  rover.move();
  expect(rover.getGridPositionX()).toBe(0);
  expect(rover.getGridPositionY()).toBe(1);

  rover.rotateLeft();
  expect(rover.getOrientation()).toBe("S");
  rover.move();
  expect(rover.getGridPositionX()).toBe(0);
  expect(rover.getGridPositionY()).toBe(0);
});

test("Rover cannot move out of bounds.", () => {
  const zone = Zone(4, 4, 600, 600);

  const rover1 = Rover(zone, 0, 0, "W");
  rover1.move();
  expect(rover1.getGridPositionX()).toBe(0);
  expect(rover1.getGridPositionY()).toBe(0);

  const rover2 = Rover(zone, 0, 0, "S");
  rover2.move();
  expect(rover2.getGridPositionX()).toBe(0);
  expect(rover2.getGridPositionY()).toBe(0);

  const rover3 = Rover(zone, 4, 4, "E");
  rover3.move();
  expect(rover3.getGridPositionX()).toBe(4);
  expect(rover3.getGridPositionY()).toBe(4);

  const rover4 = Rover(zone, 4, 4, "N");
  rover4.move();
  expect(rover4.getGridPositionX()).toBe(4);
  expect(rover4.getGridPositionY()).toBe(4);
});
