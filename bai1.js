// Bài 1: Biến và kiểu dữ liệu

// let myName = "Duong";
// let age = 19;
// let isStudent = true;
// console.log(typeof myName);
// console.log(typeof age);
// console.log(typeof isStudent);

// // Bài 2: Toán tử số học
// let a = 7;
// let b = 3;
// let sum = a + b;
// let subtract = a - b;
// let product = a * b;
// let quotient = a / b;
// let remainder = a % b;
// console.log("Giá trị của a là ", a);
// console.log("Giá trị của b là ", b);
// console.log("Tổng: ", sum);
// console.log("Hiệu: ", subtract);
// console.log("Nhân: ", product);
// console.log("Chia: ", quotient);
// console.log("Dư: ", remainder);
// a++;
// b++;
// console.log("Giá trị mới của a là ", a);
// console.log("Giá trị mới của b là ", b);

// //Bài 3: Toán tử so sánh và logic
// console.log("a lớn hơn b ", a > b);
// console.log("giá trị a bằng giá trị b ", a == b);
// console.log("biến a bằng biến b (so sánh cả kiểu dữ liệu) ", a === b);
// console.log("a > b và a < 10 ", a > b && a < 10);
// console.log("a > b hoặc a < 10 ", a > b || a < 10);

// //Bài 4: Toán tử điều kiện
// function oddOrEven(a) {
//   if (a % 2 == 0) {
//     return "even";
//   }
//   return "odd";
// }
// let result = oddOrEven(a);
// console.log(result);

// function ageCheck(age) {
//   if (age < 13) {
//     return "child";
//   }
//   if (age <= 19) {
//     return "teenager";
//   }
//   if (age <= 59) {
//     return "adult";
//   } else {
//     return "senior";
//   }
// }
// console.log(ageCheck(2)); // Outputs: child
// console.log(ageCheck(19)); // Outputs: teenager
// console.log(ageCheck(52)); // Outputs: adult
// console.log(ageCheck(101)); // Outputs: senior

// BÀI TẬP CHƯƠNG 2
//Bài 1: Diện tích, thể tích

// function printSphereAreaAndVolume() {
//   //make user input the radius
//   let r = parseFloat(
//     prompt("Bạn hãy nhập bán kính hình cầu (phải là một số): ")
//   );
//   // check if user input is in valid form (numbers)
//   if (isNaN(r)) {
//     alert("Bạn làm ơn hãy nhập lại bán kính (phải là một số)");
//     return null;
//   }
//   // if user input is valid
//   //calculate sphere's area and volume (rounded to 2 d.p)
//   let area = (4 * Math.PI * r * r).toFixed(2);
//   let volume = ((4 / 3) * Math.PI * r * r * r).toFixed(2);
//   //return a string that show the results of area and volume
//   let result = `Diện tích hình cầu là ${area}, Thể tích hình cầu là: ${volume}`;
//   console.log(result);
// }
// printSphereAreaAndVolume();

// //Bài 2: Kiểm tra chẵn lẻ
// function checkOddOrEven() {
//   // make the user input the integer (max 5 digits)
//   let N = parseInt(
//     prompt("Bạn hãy nhập một số nguyên dương không quá 5 chữ số: ")
//   );
//   // check if user input is in invalid form
//   if (isNaN(N) || N <= 0 || !Number.isInteger(N) || N.toString().length > 5) {
//     // is a not number + smaller than 0 + is not an integer + more than 5 digits
//     alert(
//       "Bạn làm ơn hãy nhập lại (phải là một số nguyên dương không quá 5 chữ số!)"
//     );
//     return null;
//   }
//   // if user input is valid
//   let result;
//   if (N % 2 === 0) {
//     result = "CHAN";
//   } else {
//     result = "LE";
//   }
//   console.log(result);
// }
// checkOddOrEven();

// //Bài 3: Tìm thứ trong tuần dựa vào ngày tháng năm
// Solution 1: Skip advance date input validation
// function calculateDaysInWeek() {
//   let day = parseInt(prompt("Bạn hãy nhập số ngày: "));
//   let month = parseInt(prompt("Bạn hãy nhập số tháng: "));
//   let year = parseInt(prompt("Bạn hãy nhập số năm: "));
//   //basic user input validation
//   if (
//     isNaN(day) ||
//     day <= 0 ||
//     day > 31 ||
//     isNaN(month) ||
//     month <= 0 ||
//     month > 12 ||
//     isNaN(year) ||
//     year <= 0
//   ) {
//     alert("Bạn vui lòng nhập đúng định dạng và logic của ngày/tháng/năm !");
//     return null;
//   }
//   let n =
//     (day +
//       2 * month +
//       Math.floor((3 * (month + 1)) / 5) +
//       year +
//       Math.floor(year / 4)) %
//     7;
//   alert("n = " + n);
// }
// calculateDaysInWeek();

// Solution 2: Check if user might input invalid day (ex: 30/02, 31/09, leap year)
// // Check if a year is a leap year
// function isLeapYear(year) {
//   if (isNaN(year) || year <= 0 || !Number.isInteger(year)) {
//     return false; // Invalid input, return false
//   }

//   return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0; //return true
// }
// // main function
// function findDaysInWeek() {
//   //user prompts and convert to integer.  In JavaScript, the prompt function returns a string
//   let day = parseInt(prompt("Bạn hãy nhập số ngày: "));
//   let month = parseInt(prompt("Bạn hãy nhập số tháng: "));
//   let year = parseInt(prompt("Bạn hãy nhập số năm: "));

//   // Check for invalid user inputs
//   // Year: must be integer +  > 0). Geogergian Calendar only accecp years larger than 0 => Công lịch chỉ chấp nhận năm lớn hơn 0
//   // Month: must be postive (>0) + integer + <= 12
//   // Day: must be integer + positive (<0) + smaller or equal to 31 (<=31) (bỏ qua cái này nếu làm hết advance feature bên dưới)

//   if (
//     isNaN(day) ||
//     day <= 0 ||
//     day > 31 ||
//     isNaN(month) ||
//     month <= 0 ||
//     month > 12 ||
//     isNaN(year) ||
//     year <= 0
//   ) {
//     alert("Bạn vui lòng nhập đúng định dạng và logic của ngày/tháng/năm !");
//     return null;
//   }
//   //Check for different month lengths
//   //Months with 31 days: 1,3,5,7,8,10,12
//   if (
//     (month === 1 ||
//       month === 3 ||
//       month === 5 ||
//       month === 7 ||
//       month === 8 ||
//       month === 10 ||
//       month === 12) &&
//     day > 31
//   ) {
//     alert(
//       "Bạn vui lòng nhập lại số tháng hoặc ngày. Tháng bạn vừa nhập có tối đa 31 ngày !"
//     );
//     return null;
//   }
//   //Months with 30 days: 4,6,9,11
//   if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
//     alert(
//       "Bạn vui lòng nhập lại số tháng hoặc ngày. Tháng bạn vừa nhập có tối đa 30 ngày !"
//     );
//     return null;
//   }

//   if (month == 2) {
//     // Check for February and leap year (29 days) or normal year (28 days)
//     if (isLeapYear(year) && day > 29) {
//       alert(
//         "Bạn vui lòng nhập lại ngày hoặc tháng hoặc năm. Năm bạn vừa nhập là năm nhuận, tháng 2 năm đó có tối đa 29 ngày !"
//       );
//       return null;
//     } else if (!isLeapYear(year) && day > 28) {
//       alert(
//         "Bạn vui lòng nhập lại ngày hoặc tháng hoặc năm. Năm bạn vừa nhập là năm thường, tháng 2 năm đó có tối đa 28 ngày !"
//       );
//       return null;
//     }
//   }
//   //the formula

//   let n =
//     (day +
//       2 * month +
//       Math.floor((3 * (month + 1)) / 5) +
//       year +
//       Math.floor(year / 4)) %
//     7;

//   // Determine the day of the week
//   let dayOfWeek;
//   switch (n) {
//     case 0:
//       dayOfWeek = "Chủ Nhật";
//       break;
//     case 1:
//       dayOfWeek = "Thứ Hai";
//       break;
//     case 2:
//       dayOfWeek = "Thứ Ba";
//       break;
//     case 3:
//       dayOfWeek = "Thứ Tư";
//       break;
//     case 4:
//       dayOfWeek = "Thứ Năm";
//       break;
//     case 5:
//       dayOfWeek = "Thứ Sáu";
//       break;
//     case 6:
//       dayOfWeek = "Thứ Bảy";
//   }
//   // Display the result
//   alert(`${day}/${month}/${year} là ${dayOfWeek} (N = ${n})`);
// }
// // Result is currently wrong
// //Call function
// findDaysInWeek();

// Bài 4: Số phát lộc

// function luckyNumber() {
//   let inputNumber = parseInt(
//     prompt(
//       "Bạn hãy nhập một số nguyên dương có tối thiểu 2 chữ số và không quá 500 chữ số: "
//     )
//   );
//   // check for invalid input
//   if (
//     isNaN(inputNumber) ||
//     inputNumber.toString().length > 500 ||
//     inputNumber <= 0 ||
//     !Number.isInteger(inputNumber) ||
//     inputNumber.toString().length < 2
//   ) {
//     alert(
//       "Bạn vui lòng nhập đúng định dạng một số nguyên dương có tối thiểu 2 chữ số và không quá 500 chữ số ! "
//     );
//     return null;
//   }
//   // Convert input number into string
//   let stringNumber = inputNumber.toString();
//   let lastTwoDigits = stringNumber.slice(-2);
//   if (parseInt(lastTwoDigits) === 86) {
//     alert("YES");
//   } else {
//     alert("NO");
//   }
// }

// luckyNumber();

// //Bài 5: Phép cộng
// function additionCheck() {
//   let sum = prompt(
//     "Vui lòng nhập phép toán a + b = c: (Lưu ý: phép toán dài phải dài đúng 9 ký tự, giữa mỗi số và dấu có 1 dấu cách. a,b,c phải là các số nguyên dương có 1 chữ số)"
//   );
//   // slice sum:  a (0,1), b (4,5), c(8,9) => then parse to integer
//   let a = parseInt(sum.slice(0, 1));
//   let b = parseInt(sum.slice(4, 5));
//   let c = parseInt(sum.slice(8, 9));
//   // check for invalid user input
//   // input length not equal to 9
//   // a, b, c not positive  and not number
//   if (
//     sum.length != 9 ||
//     isNaN(a) ||
//     isNaN(b) ||
//     isNaN(c) ||
//     a < 0 ||
//     b < 0 ||
//     c < 0
//   ) {
//     alert("Vui lòng nhập đúng định dạng yêu cầu !");
//     return null;
//   }
//   // check if the addition is correct
//   if (a + b === c) {
//     alert("YES");
//   } else {
//     alert("NO");
//   }
// }

// additionCheck();

// BÀI TẬP NÂNG CAO

// // Bài 6: Đầu cuối
// function startEndCheck() {
//   let N = parseInt(
//     prompt("Bạn hãy nhấp số nguyên dương có 5 chữ số và ít hơn 18 chữ số: ")
//   );
//   //check for invalid user input
//   if (
//     isNaN(N) ||
//     N < 0 ||
//     N.toString().length > 18 ||
//     N.toString().length < 5
//   ) {
//     alert("Bạn vui lòng nhập đúng định dạng yêu cầu !");
//     return null;
//   }

//   //check if 2-first indexes and 2-last indexes are similar
//   //convert N to String
//   let stringN = N.toString();
//   //slice 2-first indexes and 2-last indexes
//   let twoFirstIndexes = parseInt(stringN.slice(0, 2));
//   let twoLastIndexes = parseInt(stringN.slice(-2));
//   //compare them
//   if (twoFirstIndexes === twoLastIndexes) {
//     alert("YES");
//   } else {
//     alert("NO");
//   }
// }
// startEndCheck();

// // Bài 7: Trung tâm tương đương
// function symmetricCenter() {
//   //user input
//   let N = parseInt(
//     prompt(
//       "Bạn hãy nhập một số nguyên dương có ít nhất và 5 chữ số và không quá 19 chữ số"
//     )
//   );
//   //check for invalid input
//   if (
//     isNaN(N) ||
//     N.toString().length < 5 ||
//     N.toString().length > 19 ||
//     N <= 0
//   ) {
//     alert("Bạn vui lòng nhập đúng định dạng yêu cầu !");
//     return null;
//   }
//   //print out original number
//   console.log("Original number: ", N);
//   // get the center index number by converting N to String
//   let stringN = N.toString();
//   let centerIndex = Math.floor(stringN.length / 2);
//   // declare a variable to hold the string index that would be taken/sliced away
//   let slicedAwayIndex = "";

//   //declare variables to hold the left-part and the righ-part of what is left after slicing.
//   let leftPart = "";
//   let rightPart = "";
//   //declare variable to hold the reverse right part
//   let reversedRightPart = "";
//   //Compare leftPart AND reversedRightPart parts to decided  if the number is symmetric

//   //check if  number of index is odd or even.
//   // Even
//   if (stringN.length % 2 == 0) {
//     // slice-away 3 most-centered indexes
//     slicedAwayIndex = stringN.slice(centerIndex - 1, centerIndex + 1);
//     console.log("slicedAwayIndex: ", slicedAwayIndex);

//     //get the left-part and the right-part of N after slicing away
//     leftPart = stringN.slice(0, centerIndex - 1);
//     rightPart = stringN.slice(centerIndex + 1);
//     console.log("leftPart: ", leftPart);
//     console.log("rightPart: ", rightPart);
//     reversedRightPart = rightPart.split("").reverse().join("");
//     // 1. split into array, each elemnt is a character.
//     //=> 2. reverse order of element in array
//     // => 3. join elements of array back into a string
//     console.log("reversedRightPart: ", reversedRightPart);
//     // Compare leftPart and reversedRightPart
//     if (leftPart == reversedRightPart) {
//       alert("YES");
//     } else {
//       alert("NO");
//     }
//   }
//   // Odd
//   else {
//     // slice-away for 2 most-centered indexes
//     slicedAwayIndex = stringN.slice(centerIndex - 1, centerIndex + 2);
//     console.log("slicedAwayIndex: ", slicedAwayIndex);

//     leftPart = stringN.slice(0, centerIndex - 1);
//     rightPart = stringN.slice(centerIndex + 2);
//     console.log("leftPart: ", leftPart);
//     console.log("rightPart: ", rightPart);
//     reversedRightPart = rightPart.split("").reverse().join("");
//     // 1. split into array, each elemnt is a character.
//     //=> 2. reverse order of element in array
//     // => 3. join elements of array back into a string
//     console.log("reversedRightPart: ", reversedRightPart);
//     // Compare leftPart and reversedRightPart
//     if (leftPart == reversedRightPart) {
//       alert("YES");
//     } else {
//       alert("NO");
//     }
//   }
// }
// symmetricCenter();

// Bài 9: Nhận biết số bí mật
// Viết chương trình kiểm tra xem số nguyên dương N có thỏa mãn tính chất sau không:
//chữ số đầu tiên cộng với chữ số cuối cùng bằng chữ số thứ hai cộng với chữ số kế cuối.
// Input
// Mỗi test là một số nguyên dương N có ít nhất 4 chữ số và không quá 9 chữ số.
// Output
// Ghi ra YES nếu tính chất trên thỏa mãn, ngược lại ghi ra NO.

// function secretNumber() {
//   //user input
//   let N = parseInt(
//     prompt(
//       "Bạn hãy nhập một số nguyên dương có ít nhất 4 chữ số và không quá 9 chữ số: "
//     )
//   );
//   //check for invalid input
//   if (
//     isNaN(N) ||
//     N <= 0 ||
//     N.toString().length < 4 ||
//     N.toString().length > 9
//   ) {
//     alert("Bạn vui lòng nhập đúng định dạng yêu cầu !");
//     return null;
//   }
//   // convert N to String
//   let stringN = N.toString();
//   // get the required numbers:

//   //first index
//   let firstIndex = parseInt(stringN[0]);
//   console.log("First index: ", firstIndex);
//   // 2nd-last index
//   let secondLastIndex = parseInt(stringN[stringN.length - 2]);
//   console.log("Second last index: ", secondLastIndex);
//   // 2nd index
//   let secondIndex = parseInt(stringN[1]);
//   console.log("Second index: ", secondIndex);
//   //last index
//   let lastIndex = parseInt(stringN[stringN.length - 1]);
//   console.log("Last index: ", lastIndex);
//   // check if firstIndex + lastIndex = secondIndex + secondLastIndex
//   if (firstIndex + lastIndex == secondIndex + secondLastIndex) {
//     alert("YES");
//   } else {
//     alert("NO");
//   }
// }
// secretNumber();
