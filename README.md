# Unified Game Client

---

## Requirements

* node.js (v6 LTS)
* npm (v3.0.0+)

## Installation

First, you will have to install the npm modules.

```bash
# Install dependencies and run the app
$ npm install && npm run dev
```

## Development workflow

### Building & running the app

```bash
$ npm run dev
```

This will run the `webpack` command and bundle all scripts into the `build/` directory.

### Hot reloading

You can also set up hot reloading to enable [automatic refreshing](https://webpack.github.io/docs/webpack-dev-server.html#automatic-refresh) using `webpack-dev-server`.

You will need two terminal tabs.

```bash
# Run this on the first tab
$ npm run watch
# Then run this on another to start the Electron app
$ npm run dev
```

### Testing

```bash
$ npm test
```

Currently, this only does linting to ensure the code follows the [standardjs](http://standardjs.com) guidelines. I wil hopefully add testing support with Mocha soon.

