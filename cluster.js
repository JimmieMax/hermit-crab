/*
 * @Des: 页面、组件说明
 * @Author: ur name
 * @Date: 2019-11-05 17:46:34
 * @query: {string} p1  内容ID
 * @props: {string} p1  数据源
 * @event: {string} p1  des
 */
const {
  isMainThread,
  parentPort,
  workerData,
  threadId,
  MessageChannel,
  MessagePort,
  Worker
} = require('worker_threads');

/**
 * @Desc: 函数说明
 * @param {type}  p1  内容ID
 * @return: 客户列表
 */
function mainThread() {
  for (let i = 0; i < 5; i++) {
    const worker = new Worker(__filename, {
      workerData: i
    });
    worker.on('exit', code => {
      console.log(`main: worker stopped with exit code ${code}`);
    });
    worker.on('message', msg => {
      console.log(`main: receive ${msg}`);
      worker.postMessage(msg + 1);
    });
  }
}

function workerThread() {
  console.log(`worker: workerDate ${workerData}`);
  parentPort.on('message', msg => {
    console.log(`worker: receive ${msg}`);
  }),
  parentPort.postMessage(workerData);
}

if (isMainThread) {
  mainThread();
} else {
  workerThread();
}