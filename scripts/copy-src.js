const fs = require('fs-extra');

try {
  fs.copySync('./src', './build', { overwrite: false });
  console.log('Copied ./src to ./build');
} catch (err) {
  console.error(err);
}
