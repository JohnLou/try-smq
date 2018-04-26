const Producer = require('redis-smq').Producer;
const smq_config = require('./smq_config');

function produceNTimes(producer, message, n, cb) {
    n -= 1;
    if (n >= 0) {
        message.sequenceId = n;
        producer.produce(message, (err) => {
            if (err) cb(err);
            else produceNTimes(producer, message, n, cb);
        });
    } else cb();
}

const producer1 = new Producer('C1', smq_config);
produceNTimes(producer1, {type: 'To C1', data: 'this is data'}, 100, (err) => {
    if (err) throw err;
    else {
        console.log('P1 successfully!');
        producer1.shutdown();
    }
});
