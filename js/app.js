let menuSlide = data.map(function (data, index) {
  return `<h3 data-index="${index}">${data.titleMenu}</h3>`;
});
let menu = document.querySelector(".slide-menu");
menu.innerHTML = menuSlide.join("");

let slideContent = data.map(function (data) {
  return `
              
                            <div class="slide-image">
                            <img src="${data.image}" alt="">
                            </div>
                            <div class="slide-text">
                            <p>${data.content}</p>
                            </div>
                      
          
          `;
});

// seclect đến nội dung tương ứng
let content = document.querySelector(".slide-content");
content.innerHTML = slideContent[0];
let currentIndex = 0;

document.querySelectorAll(".slide-menu h3").forEach(function (element) {
  element.addEventListener("click", function () {
    document.querySelectorAll(".slide-menu h3").forEach(function (el) {
      el.style.color = "#a7adad";
    });
    element.style.color = "#bd2031";
    const index = parseInt(element.getAttribute("data-index"));
    currentIndex = index;
    content.innerHTML = slideContent[index];
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

function prevSlide(event) {
  if (!currentIndex) return;
  const element = document.querySelector(`[data-index='${currentIndex}']`);
  element.style.color = "#a7adad";
  currentIndex -= 1;
  const currentElement = document.querySelector(
    `[data-index='${currentIndex}']`
  );
  content.innerHTML = slideContent[currentIndex];
  currentElement.style.color = "#bd2031";
  const rect = currentElement.getBoundingClientRect();
  const khoangCanh = rect.left - timeLineContainer.getBoundingClientRect().left;
  slideMenu.scrollLeft += khoangCanh;
}

function nextSlide(event) {
  if (currentIndex >= data.length - 1) return;
  const element = document.querySelector(`[data-index='${currentIndex}']`);
  element.style.color = "#a7adad";
  currentIndex += 1;
  const prevElement = document.querySelector(`[data-index='${currentIndex}']`);
  content.innerHTML = slideContent[currentIndex];
  prevElement.style.color = "#bd2031";
  const rect = prevElement.getBoundingClientRect();
  const khoangCanh = rect.left - timeLineContainer.getBoundingClientRect().left;
  slideMenu.scrollLeft += khoangCanh;
}

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
// hero
let newherro = herroData.map(function (data1) {
  return `<div class="herro-card">
  <div class="herro-image">
      <img src="${data1.image}" alt="">
      <div class="hero-hover">
          <div class="herro-content">
              <p>${data1.content}</p>
              <h3>${data1.name}</h3>
          </div>
      </div>
  </div>
</div>`;
});
console.log(herroData);
let herro = document.querySelector(".herro");
herro.innerHTML = newherro.join("");

// time line
let timelineEl = historicalLine.map(function (data1, index) {
  if (index % 2 === 0) {
    return `<div class="timeline-box timeline-left">
    <div class="text-box">
        <div class="timeline-title">
        <h3>${data1.title}</h3>
        <small>${data1.time}</small>
        <a href="">Xem</a>
        </div>
        <div class="timeline-image">
        <div class="timeline-background">
        <img src="assets/thanhchi.jpg" alt="">
        </div>
        <div class="timeline-inner">
        <img src="${data1.image}" alt="">
        </div>
        </div>
        </div>
  </div>`;
  } else {
    return `<div class="timeline-box timeline-right">
    <div class="text-box">
    <div class="timeline-title">
    <h3>${data1.title}</h3>
    <small>${data1.time}</small>
    <a href="">Xem</a>
</div>
<div class="timeline-image">
    <div class="timeline-background">
        <img src="assets/thanhchi.jpg" alt="">
    </div>
    <div class="timeline-inner">
        <img src="${data1.image}" alt="">
    </div>
</div>
                            </div>        
  </div>`;
  }
});
let element = document.querySelector(".timeline-card");
element.innerHTML = timelineEl.join("");

// animate scroll timeline
window.addEventListener("scroll", timelineActive);
function timelineActive() {
  var timelines = document.querySelectorAll(".timeline-box");
  console.log(timelines);
  for (var i = 0; i < timelines.length; i++) {
    var windowHeight = window.innerHeight; // chieu cao cua view port
    var elementTop = timelines[i].getBoundingClientRect().top; // đỉnh viewport đến top element
    var elementVisible = 150; // khoảng nhìn thấy element
    // console.log(
    //   "windowHeigh",windowHeight,
    //   "elementTop",elementTop,
    //   "elementVisible",elementVisible,
    //   elementTop < windowHeight - elementVisible,
    // );
    if (elementTop < windowHeight - elementVisible) {
      timelines[i].classList.add("active");
    }
  }
}
