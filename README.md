# tsx-boilerplate

TypeScript/React Boilerplate

[![Build Status](https://travis-ci.org/jedmao/tsx-boilerplate.svg?branch=master)](https://travis-ci.org/jedmao/tsx-boilerplate)

It's always time consuming to combine all components together and make things
work well.

This project template helps you create a whole new project with out-of-the-box
features including typescript, webpack and so on...

Just clone this repository to your disk, you can start coding from the
`entry.ts` without worring anything about config files.

## Install Tools

    sudo npm install typedoc -g
    sudo npm install typescript -g
    sudo npm install typings -g
    sudo npm install webpack -g
    sudo npm install webpack-dev-server -g


## Build

Install the dependencies

    sudo npm link typescript
    npm install
    typings install

Run webpack to build the files

    webpack

Run webpack-dev-server:

    webpack-dev-server

## Guide


### The Current Setup

tsconfig: `target` is set to "es5", so you don't have to convert es6 classes
with babel, this makes browsers comfortable with the compiled files. if you want
to develop node js modules, then setting target to es6 should just fine.

webpack


### Start Coding

Just start coding from `entry.ts` and `src/...` without worring anything!

### Get Your Type Definition Files

Sample commands:

    typings install dt~d3 --save --global
    typings install dt~jquery --save --global
    typings install dt~mocha --save --global

### Generate typedoc

    typedoc --target es6 --out doc typings/index.d.ts src


### Troubleshooting

#### Cannot find module '...'

For example, you encountered this error message:

    Cannot find module 'object-assign'

Simply run:

    npm install object-assign --save
    typings install object-assign --save

Then re-compile, it should work.


### FAQ

#### Why use `import assign = require("object-assign");` instead of es6 import?

This is because TypeScript can't properly loads node modules with es6 import
syntax with non-default export modules. for example:

    import assign from "object-assign";
    assign({}, ...);

The assign call above will be converted to:

    assign.default({}, ...);

However object-assign doesn't export "exports.default", this causes error in the runtime.

With the suggested es6 import statement:

    import * as assign from "object-assign";
    assign({}, ...);

Occurs error like:

    error TS2497: Module ''object-assign'' resolves to a non-module entity and
    cannot be imported using this construct.

This is because `object-assign` exports the function using `module.exports = {function}`.

```js
module.exports = shouldUseNative() ? Object.assign : function (target, source) {
```

See also: https://github.com/Microsoft/TypeScript/issues/7518
