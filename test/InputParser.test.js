const {parseInput} = require("../src/InputParser");

test("Input parsed correctly", () => {
  expect(parseInput("8 10\n1 2 E\nMMLMRMMRRMML")).toEqual({
    zone: {
      columns: 8,
      rows: 10,
    },
    rover: {
      column: 1,
      row: 2,
      orientation: 'E',
    },
    commands: [
      "M",
      "M",
      "L",
      "M",
      "R",
      "M",
      "M",
      "R",
      "R",
      "M",
      "M",
      "L",
    ]
  })
});

test("Handle bad input.", () => {
  expect(() => parseInput("8 10\n1 2 T")).toThrow('Invalid input. Input must have three lines.')
  expect(() => parseInput("8 10\n1 2 T\nMMLMRMMRRMML")).toThrowError('Invalid orientation: T. Orientation must be one of N,S,E,W.')
  expect(() => parseInput("A 10\n1 2 E\nMMLMRMMRRMML")).toThrowError('Invalid grid columns: A. Must be a whole number.')
  expect(() => parseInput("8 10\n1 2 E\nMNLMRMMRRMML")).toThrowError('Invalid commands: MNLMRMMRRMML. Commands must be an array of of M,L,R.')
});