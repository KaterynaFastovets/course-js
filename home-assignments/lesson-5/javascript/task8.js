"use strict";
//  Вивести на екран N абзаців (N вводиться користувачем) за зразком:
if (confirm("Почати тестування?")) {
    const userNum = parseInt(prompt(`Скільки абзаців вводити?`));
    for (let title = 1; title <= userNum; title++) {
        document.write(`<h2>Заголовок- ${title} </h2> `);
        for (let text = 1; text <= title; text++) {
            document.write(`<p>Розділ - ${title}, параграф - ${text}  </p> `);
        }
    }
}
//# sourceMappingURL=task8.js.map