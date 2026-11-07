//  Створити функцію, яка за номером місяця повертає його назву.

if (confirm("Почати тестування?")) {
  function getMonthNumber(mountNumber: number) {
    let mount;

    switch (mountNumber) {
      case 1:
        mount = "Січень";
        break;
      case 2:
        mount = "Лютий";
        break;
      case 3:
        mount = "Березень";
        break;
      case 4:
        mount = "Квітень";
        break;
      case 5:
        mount = "Травень";
        break;
      case 6:
        mount = "Червень";
        break;
      case 7:
        mount = "Липень";
        break;
      case 8:
        mount = "Серпень";
        break;
      case 9:
        mount = "Вересень";
        break;
      case 10:
        mount = "Жовтень";
        break;
      case 11:
        mount = "Листопад";
        break;
      case 12:
        mount = "Грудень";
        break;
      default:
        mount = "Невірно вказаний номер місяця.";
    }
    return mount;
  }
  const mountNumber = parseFloat(prompt("Номер місяця:")!);
  const mount = getMonthNumber(mountNumber);
  document.write(`Місяць - ${mount}`);
}
