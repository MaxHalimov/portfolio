const themeButton = document.getElementById("themeButton");
const themeButton2 = document.getElementById("themeButtonMob");

function changeTitle() {
  const textArr = ["Hallo!", "Hello!", "Привет!", "Салом!"];
  let i = 0;

  function updateText() {
    const textElement = document.getElementById("textChange");
    textElement.classList.add("fadeOut");

    setTimeout(function () {
      textElement.textContent = textArr[i];
      textElement.classList.remove("fadeOut");
      i = (i + 1) % textArr.length;
    }, 750); // Длительность анимации / 2 (в миллисекундах)

    setTimeout(updateText, 3000); // Вызываем функцию себя через каждые 3 секунды
  }

  // Начинаем анимацию сразу
  updateText();
}


window.onload = function () {
  changeTitle();
};

const elements = {
  logo: ["./assets/logo.png", "./assets/logo_dark.png"],
  btnTheme: ["./assets/moon.svg", "./assets/sun.svg"],
  btnTheme1: ["./assets/moon.svg", "./assets/sun.svg"],
  btnBurger: ["./assets/Burger Menu.svg", "./assets/Burger Menu white.svg"],
  iconFacebook: ["./assets/facebook.svg", "./assets/facebookDark.svg"],
  iconInst: ["./assets/instagram.svg", "./assets/instDark.svg"],
  iconGit: ["./assets/github.svg", "./assets/gitDark.svg"],
  iconTg: ["./assets/telegram.svg", "./assets/tgDark.svg"],
  line: ["./assets/line.svg", "./assets/lineForDark.svg"],
  vec2: ["./assets/Vector 1.svg", "./assets/Vector 1dark.svg"],
  vec3: ["./assets/Vector 4.svg", "./assets/Vector 4dark.svg"],
  vec4: ["./assets/Vector 5.svg", "./assets/Vector 5dark.svg"],
  vec5: ["./assets/Vector 3.svg", "./assets/Vector 3dark.svg"],
  underlineVec: ["./assets/Line 6.svg", "./assets/Line 6dark.svg"]
};

// Функция обновления изображений
function updateImages() {
  const isDark = document.body.classList.contains("dark");
  for (let id in elements) {
    const element = document.getElementById(id);
    if (element) {
      element.setAttribute("src", isDark ? elements[id][1] : elements[id][0]);
    }
  }
}

// Кнопка для отключения темной темы
themeButton.addEventListener("click", () => {
  document.body.classList.remove("dark");
  updateImages();
});

// Кнопка для переключения темы
themeButton2.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  updateImages();
});

// Устанавливаем правильные изображения при загрузке страницы
updateImages();

document.querySelector(".btnBurger").addEventListener("click", function () {
  document.querySelector(".linksMob").classList.toggle("active");
});
