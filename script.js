const menu = document.querySelector(".menu");
const navList = document.querySelector(".navlist");

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  navList.classList.toggle("open");
});

const tabs = document.querySelectorAll(".tabs li");
const contents = document.querySelectorAll(".scope");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");

    contents.forEach((c) => c.classList.remove("active"));

    contents[index].classList.add("active");
  });
});

const accordion = document.getElementsByClassName("contentBx");
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

const press = document.querySelector(".press");
const press2 = document.querySelector(".press2");

press.addEventListener("click", function () {
  navList.classList.remove("open");
  menu.classList.remove("open");
});

press2.addEventListener("click", function () {
  navList.classList.remove("open");
  menu.classList.remove("open");
});
