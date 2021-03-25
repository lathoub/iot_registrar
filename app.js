process.browser = true
global.window = { process: { type: 'renderer' } }

const debug = require('debug')('pitas:http')
const app = require('./index')
require('dotenv').config();

var env = process.env.NODE_ENV || 'development';
var config = require('./config')[env];

debug('booting..');

app.listen(config.express.port, function (error) {
  if (error) {
    debug('Unable to listen for connections', error)
    process.exit(10)
  }

  debug(`(${env}) IoT Registrar listening on port ${config.express.port}`)
})