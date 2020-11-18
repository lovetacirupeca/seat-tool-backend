const System = require('systemic');
const { join } = require('path');

module.exports = () =>
  new System({ name: 'seat-tool-backend' })
  .bootstrap(join(__dirname, 'components'));

