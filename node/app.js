const { lipsum, lipsum_title } = require('../pkg/ssvm_nodejs_starter_lib.js');

const http = require('http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url,true).query;
  if (!queryObject['lorem'] && !queryObject['lorem_title']) {
    res.end(`Please use command like this:
    curl http://${hostname}:${port}/?lorem=25
    curl http://${hostname}:${port}/?lorem_title=1
    `);
  } else if (queryObject['lorem']) {
    let num_words = parseInt(queryObject['lorem'], 10);
    res.end(lipsum(num_words) + '\n');
  } else {
    res.end(lipsum_title() + '\n');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
