// FIFO

createQueue = () => {
  const queue = [];
  return {
    enqueue(item) {
      queue.unshift(item);
    },
    dequeue(item) {
      return queue.pop(item);
    },
    peek() { // next item to be dequeued
      return queue[queue.length - 1];
    },
    get length() {
      return queue.length;
    },
    isEmpty() {
      return queue.length === 0;
    },
    getValues() {
      return queue;
    },
  };
};

// const queue = createQueue()

// queue.enqueue('hello');
// console.log(queue.peek());
// queue.enqueue('where did u go');
// queue.enqueue('ive lost my way');
// console.log(queue.display());
// queue.dequeue();
// queue.dequeue();
// console.log(queue.peek());

module.exports = {
  createQueue,
}
