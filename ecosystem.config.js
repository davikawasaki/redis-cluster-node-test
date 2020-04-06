module.exports = {
  apps : [{
    name: 'arbo-cron',
    script: 'app.js',
    instances: 1,
    autorestart: true,
    watch: false,
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
};