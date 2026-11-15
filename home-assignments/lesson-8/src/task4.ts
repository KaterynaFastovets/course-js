//  Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
// за весь рік;
// у першій половині року;
// у другій половині року;
// за літо;
// за ІІ квартал;
// за парні місяці (з парними номерами);
// за місяці, які є початковими у сезоні (весна, літо, осінь, зима).

if (confirm("Почати тестування?")) {
  const calcPayments = (payments: number[]) => {
    let yearTotal = 0;
    let firstHalf = 0;
    let secondHalf = 0;
    let summerTotal = 0;
    let secondQuarter = 0;
    let evenMonths = 0;
    let seasonStart = 0;
    let i = 0;

    for (i; i < payments.length; i++) {
      yearTotal += payments[i];

      if (i <= 5) {
        firstHalf += payments[i];
      }
      if (i >= 6) {
        secondHalf += payments[i];
      }
      if (i > 4 && i <= 7) {
        summerTotal += payments[i];
      }
      if (i > 3 && i <= 5) {
        secondQuarter += payments[i];
      }
      if ((i + 1) % 2 === 0) {
        evenMonths += payments[i];
      }
    }
    for (i = 2; i < payments.length; i += 3) {
      seasonStart += payments[i];
    }

    document.write(`Сума за весь рік: ${yearTotal}<br>`);
    document.write(`Сума за першу половину року: ${firstHalf} <br>`);
    document.write(`Сума за другу половину року: ${secondHalf} <br>`);
    document.write(`Сума за літо: ${summerTotal} <br>`);
    document.write(`Сума за ІІ квартал: ${secondQuarter} <br>`);
    document.write(`Сума за парні місяці: ${evenMonths} <br>`);
    document.write(`Сума за початкові місяці сезонів: ${seasonStart} <br>`);
  };

  const payments = [
    1200, 2200, 1950, 3000, 1000, 920, 3500, 480, 1500, 1380, 2115, 718,
  ];
  calcPayments(payments);
}
