// const themeButton = document.getElementById("themeButton");
// const theme_logo = document.getElementById("logo");
// const btnThem = document.getElementById("btnTheme");
// const facebook = document.getElementById("iconFacebook");
// const inst = document.getElementById("iconInst");
// const twit = document.getElementById("iconTwit");
// const git = document.getElementById("iconGit");
// const linkedIn = document.getElementById("iconIn");
// const telegram = document.getElementById("iconTg");
// const underline = document.getElementById("line");

// // let changeText = document.getElementById("textChange");

// // function changeTextAutomatically() {
// //   let changeText = document.getElementById("textChange");
// //   let currentText = changeText.innerText;

// //   if (currentText === "Привет!") {
// //     textBlock.innerText = "Hallo!";
// //   } else if (currentText === "Hallo!") {
// //     textBlock.innerText = "Салом!";
// //   } else if (currentText === "Салом!") {
// //     textBlock.innerText = "Привет!";
// //   }
// // }
// // Вызываем функцию changeTextAutomatically каждые 3 секунды (3000 миллисекунд)
// // setInterval(changeTextAutomatically, 3000);

// themeButton.addEventListener("click", () => {
//   document.body.classList.toggle("dark");

//   if (document.body.classList.contains("dark")) {
//     theme_logo.setAttribute("src", "./assets/logo_white.svg");
//   } else theme_logo.setAttribute("src", "./assets/logo.svg");

//   if (document.body.classList.contains("dark")) {
//     btnThem.setAttribute("src", "./assets/sun.svg");
//   } else btnThem.setAttribute("src", "./assets/moon.svg");

//   if (document.body.classList.contains("dark")) {
//     facebook.setAttribute("src", "./assets/facebookDark.svg");
//   } else facebook.setAttribute("src", "./assets/facebook.svg");

//   if (document.body.classList.contains("dark")) {
//     inst.setAttribute("src", "./assets/instDark.svg");
//   } else inst.setAttribute("src", "./assets/instagram.svg");

//   if (document.body.classList.contains("dark")) {
//     twit.setAttribute("src", "./assets/twitDark.svg");
//   } else twit.setAttribute("src", "./assets/twitter.svg");

//   if (document.body.classList.contains("dark")) {
//     git.setAttribute("src", "./assets/gitDark.svg");
//   } else git.setAttribute("src", "./assets/github.svg");

//   if (document.body.classList.contains("dark")) {
//     linkedIn.setAttribute("src", "./assets/inDark.svg");
//   } else linkedIn.setAttribute("src", "./assets/linkedin.svg");

//   if (document.body.classList.contains("dark")) {
//     telegram.setAttribute("src", "./assets/tgDark.svg");
//   } else telegram.setAttribute("src", "./assets/telegram.svg");

//   if (document.body.classList.contains("dark")) {
//     underline.setAttribute("src", "./assets/lineForDark.svg");
//   } else underline.setAttribute("src", "./assets/line.svg");

//   if (document.body.classList.contains('dark')) {
//     vec
//   }
// });
const themeButton = document.getElementById("themeButton");
const themeButton2 = document.getElementById("themeButtonMob");

const elements = {
  logo: ["./assets/logo.svg", "./assets/logo_white.svg"],
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
  underlineVec: ["./assets/Line 6.svg", "./assets/Line 6dark.svg"],
};

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  for (let id in elements) {
    const element = document.getElementById(id);
    const src = document.body.classList.contains("dark")
      ? elements[id][1]
      : elements[id][0];
    element.setAttribute("src", src);
  }
});

themeButton2.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  for (let id in elements) {
    const element = document.getElementById(id);
    const src = document.body.classList.contains("dark")
      ? elements[id][1]
      : elements[id][0];
    element.setAttribute("src", src);
  }
});

document.querySelector(".btnBurger").addEventListener("click", function () {
  document.querySelector(".linksMob").classList.toggle("active");
});
