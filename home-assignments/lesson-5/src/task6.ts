//  Каса. Користувачу повідомляють суму, яку йому треба сплатити. Користувач поступово вводить суму грошей до тих пір, поки суми не буде достатньо для оплати товарів (кожного разу користувачу повідомляють, яку ще суму потрібно ввести).

if (confirm("Почати тестування?")) {
  const sumOfProducts = 1455;
  alert(`Сума покупки ${sumOfProducts} грн`);

  let userMoney = parseInt(prompt(`До сплати 1455 грн. \n Ви сплачуєте: `)!);

  do {
    if (userMoney < sumOfProducts) {
      userMoney += parseInt(
        prompt(
          `Потрібно ще сплатити ${sumOfProducts - userMoney} грн. \n Ви сплачуєте: `,
        )!,
      );
    }
  } while (userMoney < sumOfProducts);

  let change = userMoney - sumOfProducts;

  document.write("Покупка оплачена<br>");
  document.write(`Ваша решта: ${change} грн`);
}
