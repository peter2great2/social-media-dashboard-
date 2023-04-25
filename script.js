let tContainer = document.getElementById("t-container");
const circleOne = document.getElementById("circle-one");
let circleTwo = document.getElementById("circle-two");
let social = document.getElementById("social-dashboard");
let body = document.getElementById("body");
let container = document.getElementById("container");
let gridItemTwo = document.getElementsByClassName("grid-item-2");

let darkMode = true;

const changeModeLight = () => {
  tContainer.style.backgroundColor = "white";
  tContainer.style.border = "1px solid black";
  circleTwo.style.backgroundColor = "black";
  circleOne.style.backgroundColor = "white";
  social.style.backgroundColor = "rgb(190, 190, 190)";
  social.style.color = "black";

  body.style.backgroundColor = "rgb(214, 214, 214)";
  body.style.color = "black";
  container.style.backgroundColor = "rgb(214, 214, 214)";
  let facebook = document.getElementById("facebook");
  let twitter = document.getElementById("twitter");
  let instagram = document.getElementById("instagram");
  let youtube = document.getElementById("youtube");
  facebook.style.backgroundColor = "rgb(190,190,190)";
  twitter.style.backgroundColor = "rgb(190,190,190)";
  instagram.style.backgroundColor = "rgb(190,190,190)";
  youtube.style.backgroundColor = "rgb(190,190,190)";
  facebook.style.color = "black";
  twitter.style.color = "black";
  instagram.style.color = "black";
  youtube.style.color = "black";

  let one = document.getElementById("one");
  let two = document.getElementById("two");
  let three = document.getElementById("three");
  let four = document.getElementById("four");
  let five = document.getElementById("five");
  let six = document.getElementById("six");
  let seven = document.getElementById("seven");
  let eight = document.getElementById("eight");

  one.style.backgroundColor = "rgb(190,190,190)";
  two.style.backgroundColor = "rgb(190,190,190)";
  three.style.backgroundColor = "rgb(190,190,190)";
  four.style.backgroundColor = "rgb(190,190,190)";
  five.style.backgroundColor = "rgb(190,190,190)";
  six.style.backgroundColor = "rgb(190,190,190)";
  seven.style.backgroundColor = "rgb(190,190,190)";
  eight.style.backgroundColor = "rgb(190,190,190)";

  for (let i = 0; i < gridItemTwo.length; i++) {
    gridItemTwo[i].style.color = "black";
  }

  let textMode = document.getElementById("text-mode");
  textMode.innerHTML = "Light Mode";

  const overview = document.getElementById("overview");
  overview.style.color = "hsl(234, 16%, 23%)";
};

const changeModeDark = () => {
  circleOne.style.backgroundColor = "rgb(77, 74, 71)";
  circleTwo.style.backgroundColor = "black";

  tContainer.style.backgroundColor = "black";
  tContainer.style.border = "1px solid hsl(0, 0%, 100%)";

  social.style.backgroundColor = "hsl(228, 12%, 44%, 0.09)";
  social.style.color = "hsl(0, 0%, 100%)";

  body.style.color = "black";
  container.style.backgroundColor = "hsl(232, 19%, 15%)";
  let facebook = document.getElementById("facebook");
  let twitter = document.getElementById("twitter");
  let instagram = document.getElementById("instagram");
  let youtube = document.getElementById("youtube");
  facebook.style.backgroundColor = "hsl(234, 16%, 23%)";
  twitter.style.backgroundColor = "hsl(234, 16%, 23%)";
  instagram.style.backgroundColor = "hsl(234, 16%, 23%)";
  youtube.style.backgroundColor = "hsl(234, 16%, 23%)";
  facebook.style.color = "hsl(0, 0%, 100%)";
  twitter.style.color = "hsl(0, 0%, 100%)";
  instagram.style.color = "hsl(0, 0%, 100%)";
  youtube.style.color = "hsl(0, 0%, 100%)";

  let one = document.getElementById("one");
  let two = document.getElementById("two");
  let three = document.getElementById("three");
  let four = document.getElementById("four");
  let five = document.getElementById("five");
  let six = document.getElementById("six");
  let seven = document.getElementById("seven");
  let eight = document.getElementById("eight");

  one.style.backgroundColor = "hsl(234, 16%, 23%)";
  two.style.backgroundColor = "hsl(234, 16%, 23%)";
  three.style.backgroundColor = "hsl(234, 16%, 23%)";
  four.style.backgroundColor = "hsl(234, 16%, 23%)";
  five.style.backgroundColor = "hsl(234, 16%, 23%)";
  six.style.backgroundColor = "hsl(234, 16%, 23%)";
  seven.style.backgroundColor = "hsl(234, 16%, 23%)";
  eight.style.backgroundColor = "hsl(234, 16%, 23%)";

  for (let i = 0; i < gridItemTwo.length; i++) {
    gridItemTwo[i].style.color = "hsl(0, 0%, 100%)";
  }

  let textMode = document.getElementById("text-mode");
  textMode.innerHTML = "Dark Mode";

  const overview = document.getElementById("overview");
  overview.style.color = "hsl(0, 0%, 100%)";
};

circleOne.addEventListener("click", changeModeDark);
circleTwo.addEventListener("click", changeModeLight);
