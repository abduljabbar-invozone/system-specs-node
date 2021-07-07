const {savePath, systemSpecs} = require('./lib');
const fn = require('./file-functions');

fn.writeToFile(savePath, systemSpecs());