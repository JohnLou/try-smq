const C2 = require('./C2');
const smq_config = require('./smq_config');
const DEFAULT_OPTION = {
  messageConsumeTimeout: 20000,
  messageRetryThreshold: 10,
}

const start = ()=>{
  const c2_1 = new C2(smq_config, DEFAULT_OPTION);
  c2_1.run();
}

start();
