function findDaysInWeek(a) {
  //   let a = parseInt(
  //     prompt("Bạn hãy nhập số thứ từ 0 đến 6 (CN bắt đầu từ 0): ")
  //   );
  //   //check for invalid input
  if (a < 0 || isNaN(a) || a > 6) {
    alert("Bạn vui lòng nhập đúng định dạng số thứ theo yêu cầu !");
    return null;
  }
  let day;
  switch (a) {
    case 0:
      day = "Chủ Nhật";
      break;
    case 1:
      day = "Thứ Hai";
      break;
    case 2:
      day = "Thứ Ba";
      break;
    case 3:
      day = "Thứ Tư";
      break;
    case 4:
      day = "Thứ Năm";
      break;
    case 5:
      day = "Thứ Sáu";
      break;
    case 6:
      day = "Thứ Bảy";
  }

  alert(day);
}

// Nhập vô 1 số n => in ra màn hình:
// tìm các số chia hết cho 2 từ 0=> n

function divisibleByTwo(n) {
  if (n < 0 || isNaN(n) || !Number.isInteger(n)) {
    alert("Bạn vui lòng nhập đúng định dạng số  theo yêu cầu !");
    return null;
  }
  let evenNumbers = "";
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      evenNumbers = evenNumbers + i + " ";
    }
  }
  console.log("Từ 0 đến n có các số sau chia hết cho 2: " + evenNumbers);
}
divisibleByTwo(19);
