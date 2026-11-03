//  Комп’ютер загадує два випадкових числа від 1 до 10. Вгадати обидва числа шляхом введеня можливих варіантів. В кінці вивести кількість спроб користувача.

if (confirm("Почати тестування?")) {
  const oneSecretNum = 1 + Math.floor(Math.random() * 10);
  const twoSecretNum = 1 + Math.floor(Math.random() * 10);
  let oneGuessNum = 0;
  let twoGuessNum = 0;
  let attempts = 0;

  stop: for (let i = 1; i <= 10; i++) {
    attempts++;
    oneGuessNum = parseInt(
      prompt(`Вгадайте перше секретне число від 1 - 10 \n Спроба ${i}:`)!,
    );
    twoGuessNum = parseInt(
      prompt(`Вгадайте друге секретне число від 1 - 10 \n Спроба ${i}:`)!,
    );

    if (oneGuessNum !== oneSecretNum || twoGuessNum !== twoSecretNum) {
      if (i < 10) alert(`Не вгадали! Спробуйте ще! `);
      else if ((i = 10)) alert(`Не вгадали! Спроби закінчилися! `);
    } else if (oneGuessNum === oneSecretNum && twoGuessNum === twoSecretNum) {
      break stop;
    }
  }
  if (oneGuessNum === oneSecretNum && twoGuessNum === twoSecretNum)
    document.write(
      `<p>Секретні числа: ${oneSecretNum} і ${twoSecretNum}<br> Вгадали за - ${attempts}-ї спроби </p> `,
    );
  else document.write(
    `<p>Секретні числа: ${oneSecretNum} і ${twoSecretNum} - не вгадали!</p> `,
  );
}
