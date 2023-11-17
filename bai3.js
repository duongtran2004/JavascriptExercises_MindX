// //Bài tập demo:
// //Bài 1: Số phát lộc
// function luckyNumber() {
//   // Read test cases
//   const T = parseInt(prompt("Nhập số lượng bộ test: "));
//   // Read each case
//   for (let i = 0; i < T; i++) {
//     // Promt user input for each cases
//     const n = parseInt(prompt("Nhập số nguyên dương không quá 500 chữ số : "));

//     //check for invalid input
//     if (n <= 0 || n.toString().length > 500 || !Number.isInteger(n)) {
//       alert(
//         "Bạn vui lòng nhập lại số n (phải là 1 số nguyên dương không quá 500 chữ số"
//       );
//       //instead of return, use continue so the function does not end here
//       continue;
//     }
//     //check if n end with 86
//     function endsWith86(num) {
//       return num % 100 == 86;
//     }
//     if (endsWith86(n)) {
//       console.log("YES");
//     } else {
//       console.log("NO");
//     }
//   }
// }
// luckyNumber();

// // Bài 2: Kiểm tra giai thừa
// function factorialCheck() {
//   let n = parseInt(prompt("Bạn hãy nhập một số nguyên dương: "));
//   // check for invalid input
//   if (n <= 0 || !Number.isInteger(n)) {
//     alert("Bạn vui lòng nhập lại đúng định dạng một số nguyên dương !");
//     return null;
//   }
//   //   intinialize factorial and currentNumber
//   let factorial = 1;
//   let currentNumber = 1;
//   while (factorial < n) {
//     factorial *= currentNumber;
//     currentNumber++;
//   }
//   //check if input number is a factorial
//   if (factorial === n) {
//     alert(`${n} là giai thừa của ${currentNumber - 1}`);
//     return true;
//   } else {
//     alert(`${n} không phải là giai thừa của bất kì số nào !`);
//     return false;
//   }
// }
// factorialCheck();

// // Bài 3: Tổng và tích các chữ số
// function digitsSumAndProduct() {
//   // user input
//   let N = parseInt(
//     prompt(
//       "Bạn hãy nhập số nguyên dương có ít nhất 2 chữ số và không quá 500 chữ số: "
//     )
//   );

//   //check for invalid input
//   if (
//     N <= 0 ||
//     !Number.isInteger(N) ||
//     N.toString().length < 2 ||
//     N.toString().length > 500
//   ) {
//     alert("Bạn vui lòng nhập đúng định dạng yêu cầu !");
//     return null;
//   }
//   // initiliaze product and sum variable.
//   let sum = 0;
//   let product = 1;
//   //   Convert N to String
//   let stringN = N.toString();
//   // check if all odd digits are zero
//   let allOddDigitsAreZeros = true;

//   //loop through each digits of N
//   for (let i = 0; i < stringN.length; i++) {
//     // initialize a variable to store value of digits (now currently in String)
//     let digitsValue = parseInt(stringN[i]);
//     //condition to check for even digits
//     if (i % 2 === 0) {
//       // calculate sum of even digits
//       sum += digitsValue;
//     }
//     //condition to check for odd digits and scrap 0
//     // we should use 2 ifs instead of if-else because 2 ifs are independent from each other.
//     // While if-else would stop perfoming the logic inside else once if is true.
//     if (i % 2 !== 0 && digitsValue != 0) {
//       product *= digitsValue;
//       //found an odd digit that is not 0
//       allOddDigitsAreZeros = false;
//     }
//   }
//   //check if all the odd digits are 0
//   if (allOddDigitsAreZeros) {
//     product = 0;
//   }
//   //   display result
//   // do not display product if product is longer than 18 digits
//   if (product.toString().length > 18) {
//     alert(
//       `Tổng các chữ số chẵn là: ${sum} . Tích các chữ sô lẻ quá lớn để hiển thị !`
//     );
//   } else {
//     alert(
//       `Tổng các chữ số chẵn là: ${sum} . Tích các chữ số lẻ là: ${product}`
//     );
//   }
// }

// digitsSumAndProduct();
