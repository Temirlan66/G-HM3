const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");

const hideTabContent = () => {
  tabContent.forEach((item) => {
    item.style.display = "none";
  });
  tabs.forEach((item) => {
    item.classList.remove("tabheader__item_active");
  });
};

const showTabContent = (i = 0) => {
  tabContent[i].style.display = "block";
  tabs[i].classList.add("tabheader__item_active");
};

hideTabContent();
showTabContent();

tabsParent.onclick = (event) => {
  if (event.target.classList.contains("tabheader__item")) {
    tabs.forEach((item, i) => {
      if (event.target === item) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
};

/////////////// modal

const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close");

const openModal = () => {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
};

const timeModal = setTimeout(openModal, 10000);

const closeModal = () => {
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
};
modalTrigger.onclick = () => openModal();
closeModalBtn.onclick = () => closeModal();
modal.onclick = (event) => event.target === modal && closeModal();

window.addEventListener("scroll", () => {
  if (
    document.documentElement.scrollTop + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    openModal();
  }
});

//////////data

const deadline = "2023-04-19 15:00:00";

function getTimeRemaining(deadline) {
  const time = new Date(deadline) - new Date();
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((time / (1000 / 60)) % 60);
  const seconds = Math.floor((time / 1000) % 60);

  return {
    "total": time,
    "days": days,
    "hours": hours,
    "minutes": minutes,
    "seconds": seconds,
  };
}

function setClock(element, deadline) {
  const elem = document.querySelector(element)
    days = elem.querySelector("#days")
    hours = elem.querySelector("#hours")
    minutes = elem.querySelector("#minutes")
    seconds = elem.querySelector("#seconds")
}
setInterval(updateData, 10);

function updateData() {
  const time = getTimeRemaining(deadline)
  days.innerHTML = makeZero(time.days);
  hours.innerHTML = makeZero(time.hours);
  minutes.innerHTML = makeZero(time.minutes);
  seconds.innerHTML = makeZero(time.seconds);
}

function makeZero(num) {
  if (num >= 0 && num < 10) {
    return `0${num}`;
  } else return num;
}

setClock(".timer", deadline);
