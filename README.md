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

    typings install dt~lodash --save --global

### Generate typedoc

    typedoc --target es6 --out doc typings/index.d.ts src
