/**
 * Zone represents an area to be surveyed on the planet. It is a rectangular physical
 * space divided into a grid.
 */
const Zone = (_canvas, _columns = 5, _rows = 5, _margin = 60) => {
  if (!_canvas) throw new Error("Canvas param is required");

  const _gridWidth = _canvas.width - _margin * 2;
  const _gridHeight = _canvas.height - _margin * 2;
  const _columnWidth = _gridWidth / (_columns + 1);
  const _rowWidth = _gridHeight / (_rows + 1);

  /**
   * Makes sure a grid location is within the bounds of the zone grid. If the grid location
   * is out of bounds the nearest in bounds location will be returned.
   *
   * @param {number} gridLocation A location on the X or Y axis of the grid.
   * @param {number} gridMax The maximum location on the X or Y axis.
   */
  const _keepInBounds = (gridLocation, gridMax) =>
    Math.min(Math.max(0, gridLocation), gridMax);

  const getRows = () => _rows
  const getColumns = () => _columns
  const getRowWidth = () => _rowWidth
  const getColumnWidth = () => _columnWidth
  const getCanvas = () => _canvas

  const getPhysicalLocation = (column, row) => {
    const safeColumn = _keepInBounds(column, _columns);
    const safeRow = _keepInBounds(row, _rows);
    return {
      x: (safeColumn * _columnWidth) + _margin,
      y: ((_rows - safeRow) * _rowWidth) + _margin,
    };
  };

  const drawGrid = () => {
    const ctx = _canvas.getContext("2d");
    ctx.clearRect(0, 0, _canvas.width, _canvas.height)

    // Draw horizontal lines
    for (let i = 0; i <= _rows + 1; i++) {
      const lineY = _rowWidth * i + _margin;
      const lineXStart = _margin;
      const lineXEnd = _gridWidth + _margin;
      ctx.beginPath();
      ctx.moveTo(lineXStart, lineY);
      ctx.lineTo(lineXEnd, lineY);
      ctx.closePath();
      ctx.stroke();
    }

    // Draw vertical lines
    for (let i = 0; i <= _columns + 1; i++) {
      const lineX = _columnWidth * i + _margin;
      const lineYStart = _margin;
      const lineYEnd = _gridHeight + _margin;
      ctx.beginPath();
      ctx.moveTo(lineX, lineYStart);
      ctx.lineTo(lineX, lineYEnd);
      ctx.closePath();
      ctx.stroke();
    }

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "15px courier";

    // Draw X axis labels
    for (let i = 0; i <= _columns; i++) {
      const textX = i * _columnWidth + _margin + _columnWidth / 2;
      const textY = _gridHeight + _margin * 1.5;
      ctx.fillText(i, textX, textY);
    }

    // Draw Y axis labels
    for (let i = 0; i <= _rows; i++) {
      const textY = (_rows - i) * _rowWidth + _margin + _rowWidth / 2;
      const textX = _margin * 0.5;
      ctx.fillText(i, textX, textY);
    }
  };

  return {
    getPhysicalLocation,
    drawGrid,
    getRows,
    getColumns,
    getRowWidth,
    getColumnWidth,
    getCanvas,
  };
};

module.exports = Zone;
