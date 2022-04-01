'use strict';
console.log('app js file is connected.');



function lotteryNumberPicker(){
  //create an empty array to hold some numbers
  let lotteryArray = [];
  //set the first number in our index at position 0 to be the number 10
  lotteryArray[0] = 10;
  //lets add 5 random numbers to our array up to 100
  // lotteryArray[1] = 78;
  for(let i = 0; i < 5; i++){
    lotteryArray[i] = Math.ceil(Math.random() * 99);
  }
  //log our results
  console.log(lotteryArray);
  //return the numbers
  return lotteryArray;

}

// lotteryNumberPicker();


// function lotteryNumberPicker(){
//   let lotteryArray = [];
//   lotteryArray[0] = 10;
//   for(let i = 0; i < 5; i++){
//     lotteryArray[i] = Math.ceil(Math.random() * 99);
//   }
//   return lotteryArray;
// }
// lotteryNumberPicker();


function lotteryNumbers(q, lm){

  let lotteryArray = [];

  for(let i = 0; i < q; i++){
    lotteryArray[i] = Math.ceil(Math.random() * lm);
  }
  return lotteryArray;

}
let quanity = prompt('how many numbers would you like?');
let lotteryMax = prompt('what is the max amount per number');

alert(lotteryNumbers(quanity, lotteryMax));
