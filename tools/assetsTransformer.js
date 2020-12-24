// Used for fixing imported images in tests. Referenced from package.json.
// See: https://github.com/facebook/jest/issues/2663#issuecomment-317109798
const path = require('path');

module.exports = {
  process(src, filename, config, options) {
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
  },
};
