# Mars Rover

## TODO

1. Setup dev, build and test tooling. (DONE)
1. Write tests for Zone and Rover. (DONE)
1. Write Zone and Rover modules. (DONE)
1. Get to know HTML Canvas API.
1. Create zone grid.
1. Create rover sprite.
1. Move rover.
1. Rotate rover.
1. Animate move.
1. Animate rotate.
1. Final QA.

## Design Decisions

### Why use webpack?

I like to keep things simple and I almost did not use webpack. 

I decided to use webpack for the following reasons:
* It creates a cleaner distributable. For example, the tests are not included in the distributable.
* It allows me to use ES6 modules (import/export) instead of globals which makes for clearer code.

The downside to webpack is a more complex development workflow. However, once this is scripted and tooled it is no longer an issue.

TODO: Data hiding

### Quality Control

**Static analysis.** I have set up ESLint as a first line of quality control. This is especially important for a loosely typed language like JavaScript. ESLint runs as part of the build process **so errors will stop a CI/CD pipeline.**

**Unit testing.** I am using Jest for unit testing. My set up is not perfect because I am running my tests using NodeJS on the pre transpiled source code. But it will do.

**TDD.** Build tests (specifications) for the Zone and Rover first then write the modules. Just makes life easier.

**Error Handling.** Because the Rover is a remote vehicle is must be tolerant of error conditions. It must handle bad input and remain operational.

**Data Hiding.** The Zone and Rover should not be allowed to get into an invalid state because of accidentally modifying their internal state.