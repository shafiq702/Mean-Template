var http = require('http');
var server = http.createServer();
var startDb = require('./db');
var chalk = require('chalk')


var createApplication = function () {
  server.listen(3000, function () {
      console.log('Server is listening on port 3000!');
  });
};

server.on('request', require('./app/routes/index'));

startDb.then(createApplication).catch(function (err) {
    console.error(chalk.red(err.stack));
    process.kill(1);
});
