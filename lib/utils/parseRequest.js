module.exports = rawRequest => {
    const stringyRequest = String(rawRequest);
    const data = stringyRequest.split(' ');
    const body = data[4].split('\r\n');


    return {
        method: data[0],
        path: data[1],
        body: body[2]
    };

};


