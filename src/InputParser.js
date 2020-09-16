/**
 * Responsible for parsing and validating the application input.
 * 
 * @param {string} input Application input string. See README for details.
 */
const parseInput = (input) => {
  if (input.split("\n").length != 3)
    throw new Error("Invalid input. Input must have three lines.");
  const [zoneInput, roverInput, commandsInput] = input.split("\n");
  const [zoneColumns, zoneRows] = zoneInput.split(" ");
  if (!Number.isInteger(parseInt(zoneColumns)) || parseInt(zoneColumns) < 0)
    throw new Error(
      `Invalid grid columns: ${zoneColumns}. Must be a whole number.`
    );
  if (!Number.isInteger(parseInt(zoneRows)) || parseInt(zoneRows) < 0)
    throw new Error(`Invalid grid rows: ${zoneRows}. Must be a whole number.`);
  const [roverColumn, roverRow, roverOrientation] = roverInput.split(" ");
  if (!Number.isInteger(parseInt(roverColumn)) || parseInt(roverColumn) < 0)
    throw new Error(
      `Invalid rover starting column: ${roverColumn}. Must be a whole number.`
    );
  if (!Number.isInteger(parseInt(roverRow)) || parseInt(roverRow) < 0)
    throw new Error(
      `Invalid rover starting row: ${roverRow}. Must be a whole number.`
    );
  const validOrientations = ["N", "S", "E", "W"];
  if (!validOrientations.includes(roverOrientation))
    throw new Error(
      "Invalid orientation: T. Orientation must be one of N,S,E,W."
    );
  const validCommands = ["M", "L", "R"];
  const commands = commandsInput.split("");
  const invalidCommands = commands.filter(command => !validCommands.includes(command))
  if (invalidCommands.length > 0) throw new Error(`Invalid commands: ${commandsInput}. Commands must be an array of of M,L,R.`)

  return {
    zone: {
      columns: parseInt(zoneColumns),
      rows: parseInt(zoneRows),
    },
    rover: {
      column: parseInt(roverColumn),
      row: parseInt(roverRow),
      orientation: roverOrientation,
    },
    commands,
  };
};

module.exports = {
  parseInput,
};
