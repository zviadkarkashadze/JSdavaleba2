//1
// function sum(...args) {
//   let numbersSum = 0;

//   for (let item of args) {
//     if (item > 0){
//    numbersSum += item;
//    }
//   } 

//   console.log(numbersSum);
// }

// sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);



//2
// function sum1(...args1) {
//   let numsum = 0;

//   for (let item1 of args1) {
//     numsum += item1;
//   }
//   console.log(numsum);
// }

// sum1(10, 50, 6, 7, 8, 11, 6, 3, 9);


//3
let user = {
  firstname: 'giorgi',
  lastname: 'saakadze',
  age: 32,
  isloggedin: true
}



//4
function sum2(...parmtr) {
  let numbersSum1 = 0;

  for (let item of parmtr) {
    if (item > 0){
   numbersSum1 = item;
   }
  } 

  console.log(numbersSum1);
}

sum2(2,5,11,30,100,8,11,4);