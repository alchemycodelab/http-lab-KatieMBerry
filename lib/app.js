const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const server = net.createServer(socket => {

  //whenever server gets data, parses request
  socket.on('data', data => {
    const request = parseRequest(data.toString());

    //writes response and closes connection
    if (request.path === '/' && request.method === 'GET') {
      socket.end(createResponse({
        body: 'hi',
        status: '200 ok',
        contentType: 'text/plain'
      }));
    }
  });
});

module.exports = server;
