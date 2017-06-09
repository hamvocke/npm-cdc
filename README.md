# Writing simple CDC tests in node
This spike demonstrates how you can test HTTP APIs using node and jasmine. The tests can be bundled as an npm package and then be distributed via npm.

## Executing the tests
You can either use `npm start` to setup and run the package using the provided `run.sh` script.

Alternatively you can run `npm install` and `npm test` yourself.

## Bundling the package
You can publish the package via npm, using `npm publish`. Make sure to fill in appropriate information in your `package.json`.

If you want to distribute the npm package yourself run `npm pack` from the root of this repository and distribute the resulting `.tgz` file yourself.
