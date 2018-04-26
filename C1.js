const smq = require('redis-smq');

class C1 extends smq.Consumer {
  consume(msg, cb) {
    console.log('C1 got message:');
    console.log(msg);
    setTimeout(()=>{
      return cb && cb('C1 mock err');
    }, 10000);
  }
}

C1.queueName = 'C1';
module.exports = C1;
