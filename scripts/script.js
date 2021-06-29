"use strict";

class Clicks {
  clicks = 0;
  goals = 0;
  constructor() {
    this.countClicks();
    this.readClicksFromLocalStorage();
    this.readGoalsFromLocalStorage();
    this.renderClicks();
    this.updateClicks();
    this.initSetGoals();
    this.renderGoals();
    this.showGoalsBox();
    this.showProgress();
  }
  countClicks() {
    document.addEventListener("keyup", () => {
      this.clicks++;
      this.saveClicksInLocalStorage();
      this.renderClicks();
      this.renderGoals();
      this.showProgress();
    });
  }
  renderClicks() {
    const clicksEl = document.getElementById("clicks");
    clicksEl.innerHTML = this.readClicksFromLocalStorage();
  }
  saveClicksInLocalStorage() {
    localStorage.setItem("clicks", JSON.stringify(this.clicks));
  }
  readClicksFromLocalStorage() {
    return JSON.parse(localStorage.getItem("clicks"));
  }
  saveGoalsInLocalStorage() {
    localStorage.setItem("goals", JSON.stringify(this.goals));
  }
  readGoalsFromLocalStorage() {
    return JSON.parse(localStorage.getItem("goals"));
  }
  read;
  updateClicks() {
    if (localStorage.getItem("clicks"))
      this.clicks = this.readClicksFromLocalStorage();
  }
  setGoals() {
    const clickersGoals = document.getElementById("goals").value;

    if (/^\d+$/.test(clickersGoals)) {
      this.goals = clickersGoals;
      this.saveGoalsInLocalStorage();

      return clickersGoals;
    } else {
      alert("Enter numbers!");
      return;
    }
  }
  renderGoals() {
    const startClicks = document.getElementById("start");
    const goalsEl = document.getElementById("stop");
    startClicks.innerHTML = +this.readClicksFromLocalStorage();
    goalsEl.innerHTML = +this.readGoalsFromLocalStorage();
  }
  initSetGoals() {
    document
      .getElementById("confirm-goals-btn")
      .addEventListener("click", () => {
        this.setGoals();
      });
  }
  showGoalsBox() {
    document.getElementById("set-goals-btn").addEventListener("click", () => {
      document
        .querySelector(".goals-box")
        .classList.toggle("goals-box--active");
    });
  }
  showProgress() {
    const goals = +this.readGoalsFromLocalStorage();
    const actual = +this.readClicksFromLocalStorage();
    const progress = Math.floor((actual / goals) * 100);
    console.log(progress);
    const progressBar = document.querySelector(".progress-bar-bg");
    if (progress >= 100) {
      progressBar.style.width = `100%`;
      progressBar.style.backgroundColor = "white";
      return;
    } else {
      progressBar.style.width = `${progress}%`;
      progressBar.style.backgroundColor = "white";
    }
  }
}

const clicks = new Clicks();
