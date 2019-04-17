const { createQueue } = require('./queues.js')

// FIFO with priority
createPriorityQueue = () => {
  const lpQueue = createQueue();
  const hpQueue = createQueue();
  return {
    enqueue(item, isHighPriority = false) {
      isHighPriority ? hpQueue.enqueue(item) : lpQueue.enqueue(item); 
    },
    dequeue() {
      if (!hpQueue.isEmpty()) {
        return hpQueue.dequeue();
      }

      return lpQueue.dequeue()
    },
    peek() {
      if (!hpQueue.isEmpty()) {
        return hpQueue.peek();
      }

      return lpQueue.peek()
    },
    isEmpty() {
      return (
        hpQueue.isEmpty() &&
        lpQueue.isEmpty()
        )
    },
    display() {
      let combinedQueue = lpQueue.getValues();
      if (!hpQueue.isEmpty()) {
        let hpq = hpQueue.getValues();
        for (let i in hpq) {
          combinedQueue.unshift(hpq[i]);
        };
      };

      return combinedQueue;
    }
  }
}

const priorityQueue = createPriorityQueue();
console.log(priorityQueue);
priorityQueue.enqueue('hello');
priorityQueue.enqueue('where did u go');
priorityQueue.enqueue('ive lost my way');
priorityQueue.enqueue('my way back home');
priorityQueue.enqueue('priority', true);
console.log(priorityQueue.peek());
console.log(priorityQueue.display())
console.log(priorityQueue.peek());
priorityQueue.dequeue();
console.log(priorityQueue.peek());