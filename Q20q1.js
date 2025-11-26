function createCounter() {
  let count = 0; 

  return {
    increment() {
      count++;
      console.log(`Current count: ${count}`);
    },

    decrement() {
      count--;
      console.log(`Current count: ${count}`);
    },

    getCount() {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment(); 
counter.increment(); 
counter.decrement(); 
//
console.log(counter.count);  
const counterA = createCounter();
const counterB = createCounter();

counterA.increment();
counterA.increment();

counterB.increment(); 
counterB.decrement(); 

console.log(counterA.getCount()); 
console.log(counterB.getCount()); 
