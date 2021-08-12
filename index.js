import { initBackend } from 'absurd-sql/dist/indexeddb-main-thread';

function init() {
  let worker = new Worker(new URL('./index.worker.js', import.meta.url));
  initBackend(worker);
}

init();
