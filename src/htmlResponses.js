const fs = require('fs'); // pull in the file system module

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const index2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const index3 = fs.readFileSync(`${__dirname}/../client/client3.html`);

const displayFile = (request, response, file) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(file);
  response.end();
};

const getIndex = (request, response) => {
  displayFile(request, response, index);
};

const getIndex2 = (request, response) => {
  displayFile(request, response, index2);
};

const getIndex3 = (request, response) => {
  displayFile(request, response, index3);
};

module.exports = {
  getIndex,
  getIndex2,
  getIndex3,
};
