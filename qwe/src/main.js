import './style.css'


// export function kre(arr){
//   const ter = arr.reduce((sum, n) => sum + n * !(n & 1), 0)
//   const ret = arr.reduce((sum, n) => sum + n * !(n & 0), 1)

//   const wer = ter - ret 
//   console.log(wer)
//   console.log(ter, ret)
// }

// const numbers = [1, 2, 3, 4]

// kre(numbers)

// export  function ret(str){
//   const set = str.indexOf()
//   let co = 0
//   while (set !== -1) {
//     count++;
//     pos = str.indexOf("в", set + 1);
//   }


// }


// export function ter(str){


// const searchTerm = 
// const indexOfFirst = str.indexOf(searchTerm);

// console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);

// console.log(
//   `The index of the second "${searchTerm}" is ${str.indexOf(
//     searchTerm,
//     indexOfFirst + 1,
//   )}`,
// )
// }

// const paragraph = "I think Ruth's dog is cuter than your dog!";

// ter(paragraph)


// function check (s) {
//   for (let l of s){
//     if (s.indexOf(l) === s.lastIndexOf(l)){
//       return s.indexOf(l)

//     }

//   }
//   return "-1"
// }

// console.log(check("abacabad"))
// console.log(check("bcccccccb"))


// н числа фибаначи 
// рекурсию меморизация 

// export function fibo(n){
//   if (n < 2) {
//     return n;
//   }
//   return fibo(n - 1) + fibo(n - 2);
// };




// fibo(1)

// const memoFib = memo((n) => {
//   if (n < 2) {
//       return n;
//   }
//   return memoFib(n - 1) + memoFib(n - 2);
// });

// memoFib(4)


function memo(){
  const cache = {};
    return function memoFib(n){
      
      if (cache[n]){
        return cache[n];
      }
      else{
        // val = func.apply(null, arguments);
        if (n <= 1) {
          return n;
      }
      cache[n] = memoFib(n - 1) + memoFib(n - 2);
      return cache[n]
      }
  }
};

// const fibo = memo((n) => {  
//   if (n < 2) {
//     return n;
//   }
//   return fibo(n - 1) + fibo(n - 2);
// });

// const memoFib = memo((n) => {
 
// });


// alert(memoFib(0))

const fib = memo()

console.log(fib(10));
console.log(fib(20));
