"use strict";
// let totalPrice = 0;
// for (let num = 0; num < 7; num++) {
//     const productPrice =parseFloat(prompt(`product price=`,"0")!);
//     totalPrice +=productPrice
// }
// document.write(`totalPrice: ${totalPrice}`)
let totalPrice = 1;
for (let num = 1; num <= 7; num++) {
    const productPrice = parseFloat(prompt(`product ${num} price=`, "0"));
    totalPrice += productPrice;
}
document.write(`totalPrice: ${totalPrice}`);
for (let num = 10; num <= 100; num = num + 10) {
    document.write(`${num}<br>`);
}
// num= num+10 чи num+=10
const price = 10000;
let money = 0;
do {
    alert("give money");
    const fatherMoney = Math.floor(Math.random() * 20000);
    money += fatherMoney;
} while (money < price);
//# sourceMappingURL=task9.js.map