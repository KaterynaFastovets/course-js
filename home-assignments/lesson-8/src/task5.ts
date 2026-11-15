//  Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи заповнюються випадковим чином значеннями від -500 до 500). Надаючи користувачу можливість вибирати номери елементів  (поки він не відмовиться). Знаходити сумарний виграш.

if (confirm("Почати тестування?")) {
  let prizes = [];
  for (let i = 0; i < 10; i++) {
    prizes[i] = -500 + Math.floor(Math.random() * 1001);
  }
  let selectedNumber = 0;
  let totalWinnings = 0;

  const calculateWinnings = (prizes: number[], selectedNumber: number) => {
    if (isNaN(selectedNumber) || selectedNumber < 1 || selectedNumber > 10) {
      throw new Error("Не вірно вказані номери.");
    }

    return (totalWinnings += prizes[selectedNumber - 1]);
  };

  while (true) {
    if (confirm("Продовжити?") === false) {
      document.write(`Ваш виграш становить: ${totalWinnings}`);
      break;
    }
    selectedNumber = parseInt(prompt("Введіть виграшний номер від 1-10:")!);
    calculateWinnings(prizes, selectedNumber);
  }



}
