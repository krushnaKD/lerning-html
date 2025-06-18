// let arr = [12, 4, 5, 66, 50, 9, 44, 40];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     console.log(arr[i]);
//   }
// }
//2

// let i = 0
// while(i<arr.length){
//     if(arr[i]%2 ==0){
//         console.log(arr[i]);

//     }
//     i++
// }
3;
//
// let arr = [12, 33, 45, 8, 97, 0, 76];

// let searchelement = (no) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == no) {
//       console.log(i);
//     }
//   }
//   return -1
// };

// let res = searchelement(6);
// console.log(res);

//
//4

// let arr = [12, 33, 45, 8, -7, 0, -76];
// let count=0;
// function getnegativeValue(){
//   for(let i = 0;i<arr.length;i++){
//     if(arr[i]<0){
//         count = count + 1

//     }
//   }
//   return 1
// }
// getnegativeValue()
// console.log(count);

//5

// let arr = [12, 33, 45, 8, -7, 0, 76];

// function largestNumber(){
//     let large=0;
//     for(let i = 0;i<arr.length;i++){
//      if(arr[i]>large){
//         large=arr[i]
//      }
//     }
//     console.log(large);

// }
// largestNumber()

// for(let i=0;i<3;i++){
//     for(let j=0;j<i;j++){
//         console.log("i="  ,i , "j =" ,j);

//     }
// }

// for(let i = 0;i<5;i++){
//     for(let j=0;j<=i;j++){
//         console.log("i="  ,i , "j =" ,j);
//     }
// }

// for(let i= 0;i<3;i++){
//     for(let j = i;j>0;j--){
//         console.log("i="  ,i , "j =" ,j);
//     }
// }

// for(let i = 0;i<3;i++){
//     for(let j=i;j>=0;j--){
//         console.log("i="  ,i , "j =" ,j);

//     }
// }

// for(let i=5;i>0;i--){
//     for(let j = 0;j<i;j++){
//          console.log("i="  ,i , "j =" ,j);
//     }
// }
//Q
// ****
// ****
// ****
// ****

// for(let i = 0;i<4;i++){
//     let row = ""
//     for(let j = 0;j<4;j++){
//         row = row + "*";

//     }
//     console.log(row);
// }

//Q

// for(let i = 0;i<4;i++){
//     let rightangle = " "
//     for(let j = 0;j<i+1;j++){
//         rightangle = rightangle + "*"
//     }
//     console.log(rightangle);

// }

//Q

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row = row + i;
//   }
//   console.log(row);
// }

//Q

// for (let i = 5; i > 0; i--) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row = row + j;
//   }
//   console.log(row);
// }

//Q
// *****
// ****
// ***
// **
// *
//ans
// for(let i = 0;i<5;i++){
//   let row = "";
//   for(let j = 0;j<5-i;j++){
//     row = row + "*";
//   }
//   console.log(row);
// }

//Q
//     *
//    **
//   ***
//  ****
// *****

// for (let i = 0; i < 5; i++) {
//   let row = "";
//   for (let j = 0; j < 5 - (i + 1); j++) {
//     row = row + "+";
//   }
//   for (let k = 0; k < i + 1; k++) {
//     row = row + "*";
//   }
//   console.log(row);
// }

// for (let i = 0; i < 5; i++) {
//   let row = " ";
//   let swich = 1;
//   for (let j = 0; j < i + 1; j++) {
//     row = row + swich;
//     if (swich == 1) {
//       swich = 0;
//     } else {
//       swich = 1;
//     }
//   }
//   console.log(row);
// }

// let swich = 1;
// for (let i = 0; i < 5; i++) {
//   let row = " ";

//   for (let j = 0; j < i + 1; j++) {
//     row = row + swich;
//     if (swich == 1) {
//       swich = 0;
//     } else {
//       swich = 1;
//     }
//   }
//   console.log(row);
// }


