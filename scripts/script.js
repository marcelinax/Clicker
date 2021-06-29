"use strict";

class Clicks {
  clicks = 0;
  constructor() {
    this.countClicks();
    this.readClicksFromLocalStorage();
    this.renderClicks();
    this.updateClicks();
  }
  countClicks() {
    document.addEventListener("keyup", () => {
      this.clicks++;
      this.saveClicksInLocalStorage();
      this.renderClicks();
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
  updateClicks() {
    if (localStorage.getItem("clicks"))
      this.clicks = this.readClicksFromLocalStorage();
  }
}

const clicks = new Clicks();
