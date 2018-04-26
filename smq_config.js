'use strict';

module.exports = {
  namespace: 'hq_msq',
  redis: {
    host: '127.0.0.1',
    port: 6379,
    password: '719EE0CCA492F5FCE85C35E0668A7C9A',
    db: 8
  },
  log: {
    enabled: 0,
    options: {
      level: 'trace',
    },
  },
  monitor: {
    enabled: true,
    host: '127.0.0.1',
    port: 3000,
  },
};
