This is a hand-made demo to verify that common chunks can be cached between modules using common shared dependencies like lodash and react.



## The setup

In this simple lerna setup there are a few packages in `packages` that use dynamic import to import some shared modules.

There is a top level webpack config that builds for each package with entries.


## Result

Some bundles are being generated and shared across all the modules (react), some are not.


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

