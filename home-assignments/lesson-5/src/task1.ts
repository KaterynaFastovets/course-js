// Вивести таблицю з одним рядком і  7 стовпцями.

if (confirm("Почати тестування?")) {
  document.write('<table border="2">');

  document.write("<tr>"); 

  for (let td = 1; td <= 7; td++) {
    document.write(`<td>${td}</td>`);
  }

  document.write("</tr>"); 

  document.write("</table>");
}