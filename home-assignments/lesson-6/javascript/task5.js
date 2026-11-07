"use strict";
//  Комп’ютер загадує два випадкових числа від 1 до 10. Вгадати обидва числа шляхом введеня можливих варіантів. В кінці вивести кількість спроб користувача.
if (confirm("Почати тестування?")) {
    const oneSecretNum = 1 + Math.floor(Math.random() * 10);
    const twoSecretNum = 1 + Math.floor(Math.random() * 10);
    let oneGuessNum = 0;
    let twoGuessNum = 0;
    let attempts = 0;
    do {
        attempts++;
        let guessNum = parseInt(prompt(`Вгадайте два секретних числа від 1 - 10 \n Спроба ${attempts}:`));
        if (guessNum === oneSecretNum) {
            oneGuessNum = guessNum;
            alert(`Вгадали перше секретне число`);
        }
        else if (guessNum === twoSecretNum) {
            twoGuessNum = guessNum;
            alert(`Вгадали друге секретне число`);
        }
        else
            alert(`Не вгадали`);
    } while (oneSecretNum !== oneGuessNum || twoSecretNum !== twoGuessNum);
    if (oneSecretNum === oneGuessNum && twoSecretNum === twoGuessNum)
        document.write(`Секретні числа ${oneSecretNum} і ${twoSecretNum} вгадали за ${attempts} -ї спроби!`);
    // stop: for (let i = 1; i <= 10; i++) {
    //   attempts++;
    //   oneGuessNum = parseInt(
    //     prompt(`Вгадайте перше секретне число від 1 - 10 \n Спроба ${i}:`)!,
    //   );
    //   twoGuessNum = parseInt(
    //     prompt(`Вгадайте друге секретне число від 1 - 10 \n Спроба ${i}:`)!,
    //   );
    //   if (oneGuessNum !== oneSecretNum || twoGuessNum !== twoSecretNum) {
    //     if (i < 10) alert(`Не вгадали! Спробуйте ще! `);
    //     else if ((i = 10)) alert(`Не вгадали! Спроби закінчилися! `);
    //   } else if (oneGuessNum === oneSecretNum && twoGuessNum === twoSecretNum) {
    //     break stop;
    //   }
    // }
    // if (oneGuessNum === oneSecretNum && twoGuessNum === twoSecretNum)
    //   document.write(
    //     `<p>Секретні числа: ${oneSecretNum} і ${twoSecretNum}<br> Вгадали за - ${attempts}-ї спроби </p> `,
    //   );
    // else document.write(
    //   `<p>Секретні числа: ${oneSecretNum} і ${twoSecretNum} - не вгадали!</p> `,
    // );
}
//# sourceMappingURL=task5.js.map