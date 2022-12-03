let home = document.querySelector("#frist-link");
let about = document.querySelector("#second-link");
let portfolio = document.querySelector("#third-link");
let contact = document.querySelector("#fourth-link");

let team = document.querySelector("#fivth-link");
let price = document.querySelector("#sixth-link");
let testoniation = document.querySelector("#seventh-link");

let switcherlis = document.querySelectorAll(".switcher div");
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");
let img4 = document.querySelector("#img4");
let img5 = document.querySelector("#img5");
let img6 = document.querySelector("#img6");
let img7 = document.querySelector("#img7");
let img8 = document.querySelector("#img8");
let img9 = document.querySelector("#img9");

let frist_filte = document.querySelectorAll("#frist-filter #third");
let frist_filte1 = document.querySelectorAll("#frist-filter #frist");

let inpo = document.querySelectorAll("#inpo .c");

let frist_filte_main = document.querySelectorAll("#frist-filter div");

let all_img = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

let coloring = () => {
  if (window.location.pathname == "/about_us.html") {
    about.style.color = "#9277f3";
    about.style.transform= "scale(1.1)";
  }
  if (window.location.pathname == "/") {
    home.style.color = "#9277f3";
    home.style.transform= "scale(1.1)";
  }
  if (window.location.pathname == "/index.html") {
    home.style.color = "#9277f3";
    home.style.transform= "scale(1.1)";
  }
  if (window.location.pathname == "/portfolio.html") {
    portfolio.style.color = "#9277f3";
    portfolio.style.transform= "scale(1.1)";
  }
  if (window.location.pathname == "/contact_us.html") {
    contact.style.color = "#9277f3";
    contact.style.transform= "scale(1.1)";
  }
  if (window.location.pathname == "/team.html") {
    team.style.color = "#9277f3";
    team.style.transform= "scale(1.1)";
  }
  if (window.location.pathname == "/pricing.html") {
    price.style.color = "#9277f3";
    price.style.transform= "scale(1.1)";
  }
  if (window.location.pathname == "/testimoonials.html") {
    testoniation.style.color = "#9277f3";
    testoniation.style.transform= "scale(1.1)";
  }
};
coloring();

switcherlis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manegeimg);
});
function removeActive() {
  switcherlis.forEach((li) => {
    li.classList.remove("active0");
    this.classList.add("active0");
  });
}

function manegeimg() {
  all_img.forEach((el) => {
    el.style.display = "none";

    document.querySelectorAll(this.dataset.cat).forEach((ele) => {
      ele.style.display = "";
    });
  });
}

frist_filte_main.forEach((li) => {
  li.addEventListener("click", removeActive1);
});
function removeActive1() {
  frist_filte_main.forEach((li) => {
    li.classList.remove("active1");
    this.classList.add("active1");
  });
}

frist_filte.forEach((li) => {
  li.addEventListener("click", griding);
});

function griding() {
  all_img.forEach((el) => {
    el.style.display = "grid";
    el.style.width = "50%";
  });
}

frist_filte1.forEach((li) => {
  li.addEventListener("click", griding1);
});

function griding1() {
  all_img.forEach((el) => {
    el.style.display = "grid";
    el.style.transform = "translateX(100%)";
  });
}

inpo.forEach((li) => {
  li.addEventListener("click", removeActive2);
});
function removeActive2() {
  all_img.forEach((el) => {
    el.style.display = "grid";
    el.style.transform = "translateX(100%)";
  });
}
