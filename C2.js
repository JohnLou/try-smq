const smq = require('redis-smq');

class C2 extends smq.Consumer {
  consume(msg, cb) {
    console.log('C2 got message:');
    console.log(msg);
    setTimeout(()=>{
      return cb && cb('C2 mock err');
    }, 10000);
  }
}

C2.queueName = 'C2';
module.exports = C2;
