const burger = document.querySelector(".burger");
const navList = document.querySelector(".header_list");

burger.addEventListener("click", openNav);

function openNav() {
  burger.classList.toggle("active");
  navList.classList.toggle("active");
};
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 5000,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

//reply
let reply = document.querySelectorAll(".comment_card__btn");
let text = document.querySelectorAll(".comment_card__text");

for (let i = 0; i < reply.length; i++) {
  let replyMode = false;

  reply[i].addEventListener("click", function () {
    if (replyMode) {
      this.textContent = "Reply";
      text[i].removeAttribute("contentEditable");
    } else {
      this.textContent = "Ok";
      text[i].setAttribute("contentEditable", true);
      text[i].focus();
    }

    replyMode = !replyMode;
  });
}