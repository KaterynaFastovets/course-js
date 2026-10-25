// З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.

const productPrice = parseFloat(prompt("Введіть ціну товару:")!);
const userMoney = parseFloat(prompt("Скільки грошей у покупця?")!);
const lotteryPrice = 4;

if (userMoney < productPrice) {
  document.write("Грошей не вистачає на покупку.");
} else {
  document.write("Ви можете придбати цей товар!");

  const change = userMoney - productPrice;

  if (change >= lotteryPrice) {
    document.write(` Ваша решта - ${change}, купіть лотерею за 4 грн!`);
  }
}
