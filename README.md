# Mars Rover

![CI](https://github.com/davidjohnmaccallum/mars-rover/workflows/CI/badge.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/5bd30f84-a5ad-4a11-b0e0-d2574de84b13/deploy-status)](https://app.netlify.com/sites/gracious-engelbart-811e4a/deploys)

[Click to open the app ;-D](https://gracious-engelbart-811e4a.netlify.app/)

## Instructions

Rovers have been sent to Mars to survey the terrain and you have been charged with creating their navigation system. The specifications of the challenge are listed below.

*   Mars’s surface can be thought of as a zone that is itself a two-dimensional grid of square areas.
*   The zones have been very carefully surveyed ahead of time and are deemed safe for exploration within the landing terrain bounds, as represented by a single cartesian coordinate - for example: (5, 5).
*   The rover understands the cardinal points and can face either East (E), West (W), North (N) or South (S) at any given time.
*   The rover understands three commands:
    *   M - Move one space forward in the direction it is facing
    *   R - rotate 90 degrees to the right
    *   L - rotate 90 degrees to the left
*   Due to the transmission delay in communicating with the rover on Mars, you are only able to send the rover a single list of commands.
*   These commands will be executed by the rover and its resulting location sent back to HQ. This is an example of the list of commands sent to the rover:

    8 10

    1 2 E

    MMLMRMMRRMML

*   This is how the rover will interpret the above commands:
    *   The first line describes how big the current zone is. This zone’s boundary is at the Cartesian coordinate of 8,10 and the zone comprises 80 blocks.
    *   The second line describes the rover’s starting location and orientation.
    *   This rover would start at position 1 on the horizontal axis, position 2 on the vertical axis and would be facing East (E). The third line is the list of commands (movements and rotations) to be executed by the rover.
    *   As a result of following these commands, a rover starting at ​1 2 E​ in this zone would land up at ​3 3 S​.

You are to design a program which takes a text in the format as described above and then displays its resulting rover location to the console. Be sure to include:

*   A README with clear instructions on how to use your program. Also include a brief description of the design decisions made in your program as well as how you have ensured your code’s correctness.
*   The input to your program (as described above) as well as any additional inputs.

## Design Decisions

I believe strongly in **Domain Driven Design**, **Test Driven Development** and **CI/CD and developer workflow automation**. I tried to bring this across in this assignment. 
* In terms of DDD I attempted to demonstrate a good application of [Ubiquitous Language](https://martinfowler.com/bliki/UbiquitousLanguage.html) by carefully using the terminology in the instructions within the code. 
* In terms of TDD I wrote tests before code and used used them to check myself as I refactored the code. 
* In terms of CI/CD and automation I used GitHub workflows to run my test on check-in and I am deploying continuously to Netlify.
* In terms of Quality Control I have set up static analysis (linter) on the code which must pass, along with the unit tests, before a build will complete.
* In terms of OO design I have attempted to hide the internals of modules unless they need to be exposed.

Architecturally I would have liked to separate the application into three parts: control, model and presentation. For the sake of time I combined presentation into the model classes (Rover and Zone). Control happens through the public interface of the Rover module and is thus decoupled.

## Building

I built the program using Node 10.15.

```sh
git clone https://github.com/davidjohnmaccallum/mars-rover
cd mars-rover
npm install
npm run build
open dist/index.html
```

## TODO

1. Setup dev, build and test tooling. (DONE)
1. Write tests for Zone and Rover. (DONE)
1. Write Zone and Rover modules. (DONE)
1. Get to know HTML Canvas API. (DONE)
1. Create zone grid. (DONE)
1. Create rover sprite. (DONE)
1. Move rover. (DONE)
1. Handle input. (DONE)
1. Rotate rover. (DONE)
1. Animate move.
1. Animate rotate.
1. Final QA. (DONE)

