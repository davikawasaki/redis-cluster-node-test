'use strict';

const Redis = require('ioredis');
const options = {
  host: process.env.REDIS_URL || '127.0.0.1',
  port: process.env.REDIS_PORT || 6379,
  // password: process.env.REDIS_PASSWORD || '',
  connectTimeout: 10000, // in milliseconds
};
let _client;

const setClient = () => {
  console.log(options)
  try {
    if (!_client) return new Redis(options);
    else return _client;
  } catch (e) {
    console.log(e);
    return _client;
  }
}

const testRedis = async () => {
  _client = setClient();
  _client.on("error", (e) => {
    console.log(e);
  });
  await _client.auth(options.password);
  await _client.set("foo", "bar", "EX", 86400);
  console.log(await _client.get("foo"));
}

module.exports = testRedis;