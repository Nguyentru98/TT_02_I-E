
let titleMenu = data.map(function (data, index) {
  return `<h3 data-index="${index}">${data.titleMenu}</h3>`;
});
let menu = document.querySelector(".slide-menu");
menu.innerHTML = titleMenu.join("");

let titleContent = data.map(function (data) {
  return `
          <h3>${data.titleContent}</h3>
          <p>${data.content}</p>
          `;
});

// seclect đến nội dung tương ứng
let content = document.querySelector(".slide-content");
content.innerHTML = titleContent[0];

document.querySelectorAll(".slide-menu h3").forEach(function (element) {
  element.addEventListener("click", function () {
    document.querySelectorAll(".slide-menu h3").forEach(function (el) {
      el.style.color = "#a7adad";
    });
    element.style.color = "#bd2031";
    const index = parseInt(element.getAttribute("data-index"));
    content.innerHTML = titleContent[index];
  });
});

//  scrol đến phần tử
const clicks = document.querySelectorAll(".slide-menu h3");
const slideMenu = document.querySelector(".slide-menu");
const timeLineContainer = document.querySelector(".time-line-container");

clicks.forEach((element, index) => {
  element.addEventListener("click", () => {
    const rect = element.getBoundingClientRect();
    const khoangCanh =
      rect.left - timeLineContainer.getBoundingClientRect().left;
    slideMenu.scrollLeft += khoangCanh;
  });
});

// serach
let search = document.querySelector(".fa-search");
let input = document.querySelector(".input-search");
search.addEventListener("click", () => {
  if (input.style.display === "block") {
    input.style.display = "none";
  } else {
    input.style.display = "block";
  }
});
// -------------------------------------------
// render giao diện
let newmain = main.map(function (data) {
  return `<div class="content-card">
             <div class="image-content">
                <img src="${data.image}" alt="">
            </div>
            <div class="content">
                  <div class="title-content">
                    <h3>${data.title}</h3>
                </div>
                <div class="paragraph">
                    <p>${data.content}</p>
                    <span>Xem thêm</span>
                </div>
            </div>      
  </div>
            
  `;
});
let maincontent = document.querySelector(".main-content");
maincontent.innerHTML = newmain.join("");

// hero
let herroData = herro.map(function (data1) {
  return`<div class="herro-card">
  <div class="herro-image">
      <img src="${data1.image}" alt="">
      <div class="hero-hover">
          <div class="herro-content">
              <p>${data1.content}</p>
              <h3>${data1.name}</h3>
          </div>
      </div>
  </div>
</div>`
})
console.log(herroData);
let herro = document.querySelector(".herro");
herro.innerHTML = herroData.join("");