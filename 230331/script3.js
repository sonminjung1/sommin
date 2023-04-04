// let info = navigator.userAgent.toLocaleLowerCase();
// let osImg = null;

// if(info.indexOf('windows') >= 0) {
//   osImg = 'windows.png';
// } else if(info.indexOf('mecintosh') >= 0) {
//     osImg = 'mecintosh.png';
//   }  else if(info.indexOf('iphone') >= 0) {
//     osImg = 'iphone.png';
//   }else if(info.indexOf('android') >= 0) {
//     osImg = 'android.png';
//   }
// document.write("<img src=\"/img/" + osImg + "\">","<br>");
// let scr = screen;
// let sc_w = scr.width;
// let sc_h = scr.height;

// document.write("모니터 해상도 너비 :" sc_w + "px")
// document.write("모니터 해상도 높이 :" sc_h + "px")




// 전화번호 4개 뒷자리 가리기
// let userNum = prompt("당신의 연락처는?","");
// let result = userNum.substring(0, userNum.length-4) + "****";
// document.write(result);

// let imgSrc = "bnt_out.jpg";
// let result_1 = imgSrc.replace("bnt_out.jpg","bnt_over.jpg");
// document.write(result_1)


// // 음식메뉴 고르기
// let menu = ["파스타", "김밥", "떡볶이", "칼국수", "라면", "빵"];
// let menuNum = Math.floor(Math.random()*menu.length)

// let result = menu[menuNum]
// document.write("<h1>음식메뉴 골라보세요</h1>");
// document.write(result);

let menu = ["돈까스", "라면", "토스트", "회", "이자카야"]
let menuNum = Math.floor(Math.random()*menu.length)

let result = menu[menuNum]