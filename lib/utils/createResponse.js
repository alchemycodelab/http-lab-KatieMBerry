module.exports = ({ body = '', contentType = 'text/html', status = '200 OK' }) => {
    const length = body.length;
    return `HTTP/1.1 ${status}
Accept-Ranges: bytes
Content-Length: ${length}
Content-Type: ${contentType}\r\n\r
${body}`;


};
