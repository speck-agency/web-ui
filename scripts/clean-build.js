const fs = require('fs-extra');

try {
  fs.emptyDirSync('./build');
  console.log('Cleaned ./build');
} catch (err) {
  console.error(err);
}
