module.exports = rawRequest => {
    const data = rawRequest.split(' ');
    const [, body] = rawRequest.split('\r\n\r\n');

    if (body) {
        return {
            method: data[0],
            path: data[1],
            body
        };
    } else {
        return {
            method: data[0],
            path: data[1]
        };
    }
};


