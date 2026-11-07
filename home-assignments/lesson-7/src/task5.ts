// Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення (тег img повине знаходитись у середині тега a: <a> <img src=”шлях”> </a>

if (confirm("Почати тестування?")) {
  const getBanner = (image: string, title: string, link: string) => {
    return `<div style="display:flex; flex-direction:column; max-width:700px; gap:10px; padding:15px; background-color:white; ">
                <h2 style="align-self:center; color:blue; font-size:25px ">${title}</h2>
                <a style="max-width:550px " target="_blank" href=${link}>
                   <img style="  display: block; width: 100%; height: 100%; object-fit: cover;" src=${image} alt="Image">
                </a>
            </div>`;
  };

  const image = "../img/uk.jpg";
  const title = "Україна";
  const link =
    "https://uk.wikipedia.org/wiki/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0";

  let showBanner = getBanner(image, title, link);
  document.write(`${showBanner}`);
}
