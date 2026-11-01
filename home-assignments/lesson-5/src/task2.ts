// Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем.

if (confirm("Почати тестування?")) {
  let userNumber = parseInt(prompt("Скільки випадкових чисел вивести?")!);

  document.write(
    '<ul style="list-style: disc; padding-left: 40px; color: white;">',
  );

  for (let i = 0; i < userNumber; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    document.write(`<li  style="list-style: disc;">${randomNumber}</li>`);
  }

  document.write("</ul>");
}