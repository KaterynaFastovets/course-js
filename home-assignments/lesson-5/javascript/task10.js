"use strict";
//  Комп’ютер загадує два випадкових числа від 1 до 10. Вгадати обидва числа шляхом введеня можливих варіантів. В кінці вивести кількість спроб користувача.
if (confirm("Почати тестування?")) {
    const oneSecretNum = 1 + Math.floor(Math.random() * 10);
    const twoSecretNum = 1 + Math.floor(Math.random() * 10);
    let oneGuessNum = 0;
    let twoGuessNum = 0;
    let attempts = 0;
    for (let i = 1; i <= 10; i++) {
        attempts++;
        let oneUserNum = parseInt(prompt(`Вгадайте перше секретне число від 1 - 10 \n Спроба ${i}:`));
        if (isNaN(oneUserNum) || oneUserNum < 1 || oneUserNum > 10) {
            oneUserNum = parseInt(prompt(`Невірно введене число! Вгадайте перше секретне число від 1 - 10 \n Спроба ${i}:`));
            let twoUserNum = parseInt(prompt(`Вгадайте друге секретне число від 1 - 10 \n Спроба ${i}:`));
            if (isNaN(twoUserNum) || twoUserNum < 1 || twoUserNum > 10) {
                twoUserNum = parseInt(prompt(`Невірно введене число! Вгадайте друге секретне число від 1 - 10  \n Спроба ${i}:`));
            }
            if (oneUserNum === oneSecretNum)
                oneGuessNum = oneUserNum;
            if (twoUserNum === twoSecretNum)
                twoGuessNum = twoUserNum;
            if (oneGuessNum === oneSecretNum && twoGuessNum === twoSecretNum)
                break;
        }
        if (oneGuessNum !== oneSecretNum || twoGuessNum !== twoSecretNum)
            document.write(`<p>Секретні числа- ${oneSecretNum} і ${twoSecretNum}<br> Ви використали  - ${attempts} спроб і не вгадали! </p> `);
        else {
            document.write(`<p>Секретні числа- ${oneSecretNum} і ${twoSecretNum}<br> Вгадали за - ${attempts} спроби </p> `);
        }
    }
}
//# sourceMappingURL=task10.js.map