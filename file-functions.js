const fs = require('fs');

// write to a file
const writeToFile = (path, data) => {
    fs.writeFile(path, data, function (err) {
        if (err)
            return console.log(err);
    });
}

module.exports = { writeToFile };