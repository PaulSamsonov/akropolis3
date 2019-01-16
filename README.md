# Akropolis ICO Web App

### Installation

> **Important**: [Node.js](https://nodejs.org/en/) > V6.x is a minimum requirement.

```sh
$ npm install -g preact-cli
```

### CLI Options

#### preact build

Create a production build

```sh
$ preact build

  --src             Entry file (index.js).                       [string]   [default: "src"]
  --dest            Directory root for output.                   [string]   [default: "build"]
  --prerenderUrls   Path to pre-render routes configuration.     [string]   [default: "prerender-urls.json"]
  --template        Path to template file.                       [string]   [default: none]
  --service-worker  Add a service worker to application.         [boolean]  [default: true]
  --production, -p  Create a minified production build.          [boolean]  [default: true]
  --no-prerender    Disable pre-render of static app content.    [boolean]  [default: false]
  --clean           Clear output directory before building.      [boolean]  [default: true]
  --json            Generate build statistics for analysis.      [boolean]  [default: false]
  --config, -c      Path to custom CLI config.
```

#### preact watch

Spin up a development server with multiple features like `hot-module-replacement`, `module-watcher`

```sh
$ preact watch

  --cwd         A directory to use instead of $PWD.              [string]   [default: .]
  --src         Entry file (index.js)                            [string]   [default: "src"]
  --port, -p    Port to start a server on                        [string]   [default: "8080"]
  --host,       Hostname to start a server on                    [string]   [default: "0.0.0.0"]
  --https       Use HTTPS?                                       [boolean]  [default: false]
  --prerender   Pre-render static app content on initial build   [boolean]  [default: false]
```

Note:

1. You can run dev server using `HTTPS` then you can use the following `HTTPS=true preact watch`
2. You can run the dev server on a different port using `PORT=8091 preact watch`

#### preact serve

Start a production version development server

```sh
$ preact serve

  --cwd       A directory to use instead of $PWD.                             [string]  [default: .]
  --dir       Directory root to serve static files from.                      [string]  [default: "build"]
  --server    Which server to run, or "config" to produce a firebase config.
              [options: "simplehttp2server", "superstatic", "config"]         [string]  [default: "simplehttp2server"]
  --dest      Directory or filename where firebase.json should be written
              (used for --server config)                                      [string]  [default: -]
  --port, -p  Port to start a server on.                                      [string]  [default: PORT || 8080]
```

### Build

```sh
# create a production build:
npm run build
```
### Deploy (Only for deploying to firebase)

```sh
# generate configuration in Firebase Hosting format:
npm run serve -- --server config

# Copy your static files to a server!
```