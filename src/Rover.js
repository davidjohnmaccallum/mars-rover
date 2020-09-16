/**
 * This module models the rover. The rover can move and turn and 
 * is aware of its position.
 * 
 * @param {Zone} _zone Zone within which rover will operate.
 * @param {number} _startColumn Starting X location of rover.
 * @param {number} _startRow Starting Y location of rover.
 * @param {string} _startOrientation Starting orientation of rover (N,S,E,W).
 */
const Rover = (
  _zone,
  _startColumn = 0,
  _startRow = 0,
  _startOrientation = "E"
) => {
  let _column = _startColumn;
  let _row = _startRow;
  let _orientation = _startOrientation;

  const getColumn = () => _column;
  const getRow = () => _row;
  const getOrientation = () => _orientation;
  
  const rotateLeft = () => {
    switch (_orientation) {
      case "N":
        _orientation = "W";
        break;
      case "S":
        _orientation = "E";
        break;
      case "E":
        _orientation = "N";
        break;
      case "W":
        _orientation = "S";
        break;
    }
  };

  const rotateRight = () => {
    switch (_orientation) {
      case "N":
        _orientation = "E";
        break;
      case "S":
        _orientation = "W";
        break;
      case "E":
        _orientation = "S";
        break;
      case "W":
        _orientation = "N";
        break;
    }
  };

  const move = () => {
    switch (_orientation) {
      case "N":
        if (_row < _zone.getRows()) _row++;
        break;
      case "S":
        if (_row > 0) _row--;
        break;
      case "E":
        if (_column < _zone.getColumns()) _column++;
        break;
      case "W":
        if (_column > 0) _column--;
        break;
    }
  };

  const drawRover = () => {
    const ctx = _zone.getCanvas().getContext("2d");
    const imageOrientationMap = {
      'N': "roverNorth",
      'S': "roverSouth",
      'E': "roverEast",
      'W': "roverWest",
    }
    const img = document.getElementById(imageOrientationMap[_orientation]);
    const roverSize = Math.min(_zone.getRowWidth(), _zone.getColumnWidth());
    const position = _zone.getPhysicalLocation(_column, _row);
    ctx.drawImage(img, position.x, position.y, roverSize, roverSize);
  };

  return {
    getColumn,
    getRow,
    getOrientation,
    rotateLeft,
    rotateRight,
    move,
    drawRover,
  };
};

module.exports = Rover;
