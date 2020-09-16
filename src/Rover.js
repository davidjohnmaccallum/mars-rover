/**
 *
 * @param {Zone} _zone Zone within which rover will operate.
 * @param {number} _startGridX Starting X location of rover.
 * @param {number} _startGridY Starting Y location of rover.
 * @param {string} _startOrientation Starting orientation of rover.
 */
const Rover = (
  _zone,
  _startGridX = 0,
  _startGridY = 0,
  _startOrientation = "E"
) => {
  const _validOrientations = ["N", "S", "E", "W"];
  if (!_validOrientations.includes(_startOrientation))
    throw Error(`Invalid startOrientation: ${_startOrientation}`);

  let _gridPositionX = _startGridX;
  let _gridPositionY = _startGridY;
  let _orientation = _startOrientation;

  const getGridPositionX = () => _gridPositionX;
  const getGridPositionY = () => _gridPositionY;
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
        if (_gridPositionY < _zone.getRows()) _gridPositionY++;
        break;
      case "S":
        if (_gridPositionY > 0) _gridPositionY--;
        break;
      case "E":
        if (_gridPositionX < _zone.getColumns()) _gridPositionX++;
        break;
      case "W":
        if (_gridPositionX > 0) _gridPositionX--;
        break;
    }
  };

  const drawRover = () => {
    const ctx = _zone.getCanvas().getContext("2d");
    const img = document.getElementById("rover");
    const roverSize = Math.min(_zone.getRowWidth(), _zone.getColumnWidth());
    const position = _zone.getPhysicalLocation(_gridPositionX, _gridPositionY);
    ctx.drawImage(img, position.x, position.y, roverSize, roverSize);
  };

  return {
    getGridPositionX,
    getGridPositionY,
    rotateLeft,
    rotateRight,
    move,
    drawRover,
  };
};

module.exports = Rover;
