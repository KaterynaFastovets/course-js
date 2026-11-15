// Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».

if (confirm("Почати тестування?")) {
  let names = ["Іван", "Ніна", "Іван", "Іван", "Таня", "Артем", "Іван"];
  let count = 0;
  function getName(name: string[]) {
    for (let index = 0; index < name.length; index++) {
      if (name[index] === "Іван") count++;
    }
    return count;
  }
  const counter = getName(names);
  document.write(`Імя Іван зустрічається - ${counter} p.`);
}
