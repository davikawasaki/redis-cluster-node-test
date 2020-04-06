const cron = require('node-cron');
require('dotenv').config({
  path: process.env.NODE_ENV === 'local' ? '.env.local' : '.env.production'
})

const testRedis =  require('./cron/cache');

var timezone = {
  scheduled: true,
  timezone: "America/Sao_Paulo"
};

cron.schedule("*/10 * * * * *", () => { testRedis(); }, timezone);