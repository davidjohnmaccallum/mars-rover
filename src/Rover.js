/**
 *
 * @param {Zone} zone Zone within which rover will operate.
 * @param {number} startGridX Starting X location of rover.
 * @param {number} startGridY Starting Y location of rover.
 * @param {string} startOrientation Starting orientation of rover.
 */
const Rover = (
  zone,
  startGridX = 0,
  startGridY = 0,
  startOrientation = "E"
) => {
  const _validOrientations = ["N", "S", "E", "W"]
  if (!_validOrientations.includes(startOrientation)) throw Error(`Invalid startOrientation: ${startOrientation}`)

  let _gridPositionX = startGridX;
  let _gridPositionY = startGridY;
  let _orientation = startOrientation;

  const getGridPositionX = () => _gridPositionX;
  const getGridPositionY = () => _gridPositionY;
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
        if (_gridPositionY < zone.getGridHeight()) _gridPositionY++
        break;
      case "S":
        if (_gridPositionY > 0) _gridPositionY--
        break;
      case "E":
        if (_gridPositionX < zone.getGridWidth()) _gridPositionX++
        break;
      case "W":
        if (_gridPositionX > 0) _gridPositionX--
        break;
    }
  }

  return {
    getGridPositionX,
    getGridPositionY,
    getOrientation,
    rotateLeft,
    rotateRight,
    move,
  };
};

module.exports = Rover;
