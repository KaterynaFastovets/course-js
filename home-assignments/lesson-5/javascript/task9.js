"use strict";
//    З клавіатури вводиться пароль (правильний пароль- 78). Поки пароль не вірний дати можливість користувачу повторно ввести його.
if (confirm("Почати тестування?")) {
    const correctPassword = "78";
    let userPassword;
    for (let i = 0; i < 3; i++) {
        userPassword = prompt(`Введіть пароль?`);
        if (userPassword === correctPassword)
            break;
        document.write(`<p>Пароль вірний!</p> `);
    }
}
//# sourceMappingURL=task9.js.map