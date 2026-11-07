// Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)

if (confirm("Почати тестування?")) {
  function showRandomImage(
    link1: string,
    link2: string,
    link3: string,
    link4: string,
  ): string {
    const randomImage = 1 + Math.floor(Math.random() * 4);
    let img = "";
    if (randomImage === 1) {
      img = link1;
    }
    if (randomImage === 2) {
      img = link2;
    }
    if (randomImage === 3) {
      img = link3;
    }
    if (randomImage === 4) {
      img = link4;
    }

    return img;
  }
  const img1 = "../img/winter.jpg";
  const img2 = "../img/spring.jpg";
  const img3 = "../img/summer.jpg";
  const img4 = "../img/autumn.jpg";

  const showImage = showRandomImage(img1, img2, img3, img4);
document.write(
  `<div style="max-width: 900px;">
    <img
      style="display: block; width: 100%; height:100%; object-fit:cover;"
      src="${showImage}"
      alt="Img"
    >
  </div>`,
);
}
