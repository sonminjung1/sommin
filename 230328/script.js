let food = prompt ("하루의 식비는?", "ex) 1000");
let traffic = prompt ("하루의 교통비는?", "ex) 1000");
let beverage = prompt ("하루의 음료값은?", "ex) 1000");


let nomal = Number(food) + Number(traffic) + Number(beverage);
let result = nomal > 10000;
let result_a = 10000 - nomal;
let result_b = nomal - 10000;
result = result ? result_a + "원 남았습니다!" : result_b + "원 초과되었습니다!";
document.write(result);