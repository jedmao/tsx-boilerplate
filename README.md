# tsx-redux-postcss-starter

[TypeScript][]/[React][] [Redux][] [PostCSS][] Starter Kit

[![Build Status](https://travis-ci.org/jedmao/tsx-redux-postcss-starter.svg?branch=master)](https://travis-ci.org/jedmao/tsx-redux-postcss-starter)

### Supported stack technologies
- [Express][]
- [TypeScript][]
- [Webpack][]

### On the Roadmap
- [React][]
- [Redux][]
- [CSS Modules][]
- [PostCSS][]
- [AVA][]

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


[AVA]: https://github.com/avajs/ava#readme
[CSS Modules]: https://github.com/css-modules/css-modules#readme
[Express]: http://expressjs.com/
[PostCSS]: http://postcss.org/
[React]: https://facebook.github.io/react/
[Redux]: http://redux.js.org/
[TypeScript]: http://www.typescriptlang.org/
[Webpack]: https://webpack.github.io/
