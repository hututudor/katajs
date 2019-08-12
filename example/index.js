const routes = require('./routes');
const db = require('./db');
const Kata = require('../lib');

// @ts-ignore
exports.handler = async e => {
  // Log every request
  console.log('request:', JSON.stringify(e, undefined, 2));

  console.log(routes);
  return await Kata(e, routes, db);
};
