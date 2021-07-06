const fs = require('fs');
const os = require('os');
const path = require('path');

const cpus = os.cpus();
const savePath = os.homedir()+path.sep+'Desktop'+path.sep+'system-specs.txt';

// system specs
const systemSpecs = () => {
    let systemSpecs = "System Specs"+os.EOL+os.EOL;

    systemSpecs += "CPU = " + os.cpus()[0].model + os.EOL;
    systemSpecs += "Platform = " + os.platform() + os.EOL;
    systemSpecs += "Architecture = " + os.arch() + os.EOL;
    systemSpecs += "Release = " + os.release() + os.EOL;
    systemSpecs += "Total Memory = " + os.totalmem() + " bytes" + os.EOL;
    systemSpecs += "Free Memory = " + os.freemem() + " bytes" + os.EOL;

    return systemSpecs;
}

// write to a file
const writeToFile = () => {
    fs.writeFileSync(savePath, systemSpecs(), function (err) {
        if (err)
            return console.log(err);
    });
}

writeToFile();