const C1 = require('./C1');
const smq_config = require('./smq_config');
const DEFAULT_OPTION = {
  messageConsumeTimeout: 20000,
  messageRetryThreshold: 10,
}

const start = ()=>{
  const c1_1 = new C1(smq_config, DEFAULT_OPTION);
  c1_1.run();
}

start();
