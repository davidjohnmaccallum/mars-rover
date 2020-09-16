const Rover = require("../src/Rover");
const Zone = require("../src/Zone");

const mockCanvas = {
  height: 600,
  width: 600, 
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

test("Start position and orientation is correct.", () => {
  const zone = Zone({...mockCanvas}, 12, 12);
  const rover = Rover(zone, 0, 0, "E");
  expect(rover.getColumn()).toBe(0);
  expect(rover.getRow()).toBe(0);
});

test("Position correct after move.", () => {
  const zone = Zone({...mockCanvas}, 12, 12);
  const rover = Rover(zone, 0, 0, "E");

  rover.move();
  expect(rover.getColumn()).toBe(1);
  expect(rover.getRow()).toBe(0);

  rover.rotateLeft();
  rover.move();
  expect(rover.getColumn()).toBe(1);
  expect(rover.getRow()).toBe(1);

  rover.rotateLeft();
  rover.move();
  expect(rover.getColumn()).toBe(0);
  expect(rover.getRow()).toBe(1);

  rover.rotateLeft();
  rover.move();
  expect(rover.getColumn()).toBe(0);
  expect(rover.getRow()).toBe(0);
});

test("Rover cannot move out of bounds.", () => {
  const zone = Zone({...mockCanvas}, 4, 4);

  const rover1 = Rover(zone, 0, 0, "W");
  rover1.move();
  expect(rover1.getColumn()).toBe(0);
  expect(rover1.getRow()).toBe(0);

  const rover2 = Rover(zone, 0, 0, "S");
  rover2.move();
  expect(rover2.getColumn()).toBe(0);
  expect(rover2.getRow()).toBe(0);

  const rover3 = Rover(zone, 4, 4, "E");
  rover3.move();
  expect(rover3.getColumn()).toBe(4);
  expect(rover3.getRow()).toBe(4);

  const rover4 = Rover(zone, 4, 4, "N");
  rover4.move();
  expect(rover4.getColumn()).toBe(4);
  expect(rover4.getRow()).toBe(4);
});
