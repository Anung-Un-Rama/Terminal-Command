const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = (filename) => {
  fs.open(filename, 'w', (err, fd) => err ? throw err : fs.close(fd, err => { if (err) throw err; });
}

module.exports.mkdir = (directory) => {
  fs.mkdirSync(directory);
};
