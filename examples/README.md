# Hot-Tip examples

This project uses Yarn Workspaces so you can dogfood the local version of Hot-Tip
into the examples app and use it as a dev enironment.

For this feature to work:

1. You must be using Yarn.
2. You must build Hot-Tip locally so the examples can read from it.

Build Hot-Tip with

```shell
# go to /Hot-Tip
cd ../Hot-Tip

yarn build
# or in watch mode
yarn develop
```

Run the examples with

```shell
# from this directory
yarn start
```

## Running without Yarn

> We recommend using Yarn as described because dogfooding
> dependencies with NPM is tedious.

These examples should run if you're using NPM, you can simply run
`npm install && npm start` however you will you will not be reading the local
version of hot-tip.

It is a bit tedious to get NPM to resolve the local hot-tip dependency so I don't
recommend it. If you must use NPM you can use `npm link` to register the locally
built hot-tip into examples however you may also run into difficulties around
React Hooks which require the same react & react-dom dependency to be used.

You will likely need to use npm link to symlink react and react-dom from this
project into the hot-tip project.
