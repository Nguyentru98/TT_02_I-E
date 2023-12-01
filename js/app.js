// render giao diện
let titleMenu = timeline.map(function (data, index) {
  return `<h3 data-index="${index}">${data.titleMenu}</h3>`;
});
let menu = document.querySelector(".slide-menu");
menu.innerHTML = titleMenu.join("");

let titleContent = timeline.map(function (data) {
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
    // Đặt lại màu cho tất cả các phần tử h3
    document.querySelectorAll(".slide-menu h3").forEach(function (el) {
      el.style.color = "#a7adad";
    });

    // Đặt màu cho phần tử h3 được nhấp vào
    element.style.color = "#bd2031";

    // Lấy chỉ số từ thuộc tính data-index
    const index = parseInt(element.getAttribute("data-index"));

    // Hiển thị nội dung tương ứng từ titleContent
    content.innerHTML = titleContent[index];
  });
});



//  scrol đến phần tử
const clicks = document.querySelectorAll(".slide-menu h3");
const slideMenu = document.querySelector(".slide-menu");
const timeLineContainer = document.querySelector(".time-line-container");

// Biến theo dõi hướng cuộn hiện tại
let isScrollingForward = true;

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
  if ((input.style.display === "block")) {
    input.style.display = "none";
  } else {
    input.style.display = "block";
  }
});
