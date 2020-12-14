const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const server = net.createServer(socket => {

  //whenever server gets data, parses request
  socket.on('data', data => {
    const request = parseRequest(data.toString());

    //writes response and closes connection
    socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
  });
});

module.exports = server;
