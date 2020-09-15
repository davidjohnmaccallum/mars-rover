# Mars Rover

## Design Decisions

### Why use webpack?

I like to keep things simple and I almost did not use webpack. 

I decided to use webpack for the following reasons:
* It creates a cleaner distributable. For example, the tests are not included in the distributable.
* It allows me to use ES6 modules (import/export) instead of globals which makes for clearer code.

The downside to webpack is a more complex development workflow. However, once this is scripted and tooled it is no longer an issue.

### Quality Control

**Static analysis.** I have set up ESLint as a first line of quality control. This is especially important for a loosely typed language like JavaScript. ESLint runs as part of the build process **so errors will stop a CI/CD pipeline.**

**Unit testing.** I am using Jest for unit testing. My set up is not perfect because I am running my tests using NodeJS on the pre transpiled source code. But it will do.
