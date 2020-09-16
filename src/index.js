require('./index.html')
require('./mars.jpg')
require('./roverNorth.png')
require('./roverSouth.png')
require('./roverEast.png')
require('./roverWest.png')
const {parseInput} = require('./InputParser')
const Zone = require('./Zone')
const Rover = require('./Rover')

const input = document.getElementById("input")
const button = document.getElementById("button")
const canvas = document.getElementById("zone")
const feedback = document.getElementById("feedback")

// The app is initialised with this input
const defaultInput = "8 10\n1 2 E\nMMLMRMMRRMML"
input.value = defaultInput

button.addEventListener("click", () => {
  run()
})

/**
 * The main function of the application. Sets up the Zone and the Rover
 * and sends the commands to the Rover.
 */
const run = () => {
  try {
    feedback.textContent = ""
    const runConfig = parseInput(input.value)
    const zone = Zone(canvas, runConfig.zone.columns, runConfig.zone.rows)
    const rover = Rover(zone, runConfig.rover.column, runConfig.rover.row, runConfig.rover.orientation)
    for (let i=0; i<runConfig.commands.length; i++) {
      const command = runConfig.commands[i]
      switch (command) {
        case 'M':
          rover.move()
          break
        case 'R':
          rover.rotateRight()
          break
        case 'L':
          rover.rotateLeft()
          break
      }
    }
    feedback.textContent = `${rover.getColumn()} ${rover.getRow()} ${rover.getOrientation()}`
    zone.drawGrid()
    rover.drawRover()  
   } catch(err) {
    feedback.textContent = err.message
  }
}

run()