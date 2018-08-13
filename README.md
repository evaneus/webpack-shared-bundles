This is a hand-made demo to verify that using webpack to split chunks that these chunks can be cached an re used between independent modules using shared dependencies -  such as lodash and react.

## How it works

In this simple lerna setup there are a few packages in `packages` that use dynamic imports to import some common shared modules (react, react-dom, lodash and katex).

There is a top level webpack config that builds for each package with an entry point.
Each entry is set up to be exported as a umd library exporting `Mylibrary.[name]` for use in browser script.

`lerna bootstrap --hoist` is used to pull all common dependencies to repo level `node_modules` so webpack will create only one chunk for common libs when `import()` is encountered.

Chunks are created with `[contenthash]` filenames for cacheability.

All packaged bundles are put in the dist folder.

A shared webpack runtime `runtime.js` is created, this would need to be included with any combination of the entries loaded as script files in a page.



## Result

Any combination of the generated modules `one` , `two`, `three` could be loaded in a script in a page, and they will load the shared libs `react` `react-dom` `lodash` `katex` from a shared bundle.


# Running

Install this package:

`npm install`

Install lerna:
`npm install -g lerna`


Install the sub packages:
`npm run packages`

Build the sub packages:
`npm run build`

(will start webpack bundle analyzer)

Load Assets in Browser
`npm run serve`

go to `/index.html`

