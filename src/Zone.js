/**
 * Zone represents an area to be surveyed on the planet. It is a rectangular physical
 * space divided into a grid.
 * 
 * @param {number} gridWidth The number of blocks on the X axis of the grid.
 * @param {number} gridHeight The number of blocks on the Y axis of the grid.
 * @param {number} physicalWidth The physical width of the zone in pixels.
 * @param {number} physicalHeight The physical width of the zone in pixels.
 */
const Zone = (gridWidth = 0, gridHeight = 0, physicalWidth = 0, physicalHeight = 0) => {

  const blockWidth = physicalWidth / gridWidth
  const blockHeight = physicalHeight / gridHeight

  /**
   * Makes sure a grid location is within the bounds of the zone grid. If the grid location
   * is out of bounds the nearest in bounds location will be returned.
   * 
   * @param {number} gridLocation A location on the X or Y axis of the grid.
   * @param {number} gridMax The maximum location on the X or Y axis.
   */
  const _keepInBounds = (gridLocation, gridMax) => Math.min(Math.max(0, gridLocation), gridMax)

  const getBlockWidth = () => blockWidth
  const getBlockHeight = () => blockHeight
  const getGridWidth = () => gridWidth
  const getGridHeight = () => gridHeight
  const getPhysicalLocation = (gridX ,gridY) => {  
    const safeGridX = _keepInBounds(gridX, gridWidth)
    const safeGridY = _keepInBounds(gridY, gridHeight)
    return {
      x: safeGridX * blockWidth,
      y: safeGridY * blockHeight,
    }
  }

  return {
    getBlockWidth,
    getBlockHeight,
    getGridWidth,
    getGridHeight,
    getPhysicalLocation,
  }

}

module.exports = Zone