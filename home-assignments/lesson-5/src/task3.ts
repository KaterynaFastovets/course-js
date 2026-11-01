// Вивести на екран 8 кнопок з написом “Hello”.

if (confirm("Почати тестування?")) {
  const button = "Hello";

  for (let i = 1; i <= 8; i++) {
    document.write(
      `<button style="border: 1px solid yellow; padding: 10px 15px; color: white;">${button}</button>`,
    );
  }
}
