# react-typescript-package-template

Template to write, test and publish a `react` &amp; `typescript` package in three easy steps:

1. Create a new repo based on this template;
2. Write your code in `/src`, tests in `.tests/tests` and examples in `./examples`;
3. `npm run publish`.

## Usage

After cloning the repo:

```
npm i
```

Start examples website:

```
npm run start-dev
```

Build the package library:

```
npm run build-package
```

Publish the package:

```
npm run publish
```

---

## Features:

-   Output build in both **ESNext** (`tsconfig-esm.json`) and **commonjs** (`tsconfig-cjs.json`). Included in the bundled package:
    -   Transpiled code (what is actually used by the package consumer);
    -   Types;
    -   Source code (useful only for debugging).
-   `pkgfiles` will print a list of the actual files included in the package and their size;
-   Testing environment set up with `jest`, `@testing-library/react`, `@testing-library/react-hooks` and `@testing-library/jest-dom`:
    -   Mocks for styles and files included by `webpack`;
    -   Alias used by `typescript` and `webpack`;
    -   `jest-setup` required for `@testing-library/jest-dom`;
    -   `babel.config.js` instead of embedded into `webpack.config.js` to ensure jest uses the same configuration as `webpack`'s loader.
-   Linting with `eslint` and `stylelint` integrated with `prettier` and `husky`:
    -   Files are formatted on save and double checked before each commit to keep the code base consistent.
-   Webpack environment ready to build and deploy an examples page:
    -   `npm run start-dev` to quickly test your components;
    -   `npm run build-dev` and `npm run build-prd` to generate bundles so you can deploy your examples website.
    -   Features:
        -   `webpack-dev-server` for SPA + `fast-refresh` + `source-maps`;
        -   @alias;
        -   optimization (vendors + caching);
        -   `sass` + `css-modules` + `typings for css`;
        -   `eslint` and `stylelint` integration on prd build;
        -   `webpack-bundle-analyser`.

> _Note:_ This template does not support packages with styles yet. Although you can use styles and css modules in the examples, .css/scss/sass/less/... files are not processed by `tsc` and will not be included in the final package.

## Some useful literature

[This article about best practices](https://betterstack.dev/blog/npm-package-best-practices/), [this one about esm/cjs](https://blog.logrocket.com/publishing-node-modules-typescript-es-modules/) and [this one about the actual publishing](https://zellwk.com/blog/publish-to-npm/) stand out and are useful reads.
