const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {

  //whenever server gets data, parses request
  socket.on('data', data => {
    const request = parseRequest(data.toString());

    //writes response and closes connection
    if (request.path === '/' && request.method === 'GET') {
      socket.end(createResponse({
        body: 'hi',
        status: '200 OK',
        contentType: 'text/plain'
      }));
    } else if (request.path === '/echo' && request.method === 'POST') {
      socket.end(createResponse({
        body: request.body,
        status: '200 OK',
        contentType: 'text/plain'
      }));
    } else if (request.path === '/red' && request.method === 'GET') {
      socket.end(createResponse({
        body: '<h1>red</h1>',
        status: '200 OK',
        contentType: 'text/plain'
      }));
    } else if (request.path === '/green' && request.method === 'GET') {
      socket.end(createResponse({
        body: '<h1>green</h1>',
        status: '200 OK',
        contentType: 'text/plain'
      }));
    } else if (request.path === '/blue' && request.method === 'GET') {
      socket.end(createResponse({
        body: '<h1>blue</h1>',
        status: '200 OK',
        contentType: 'text/plain'
      }));
    } else {
      return socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
  });
});

module.exports = app;
