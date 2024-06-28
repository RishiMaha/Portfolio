"use strict";

console.log("Hello world");
const nav = document.querySelector(".nav");



//website loop
let websiteLoop = setInterval(() => {
  const scrollTop = document.querySelector("html").scrollTop;
  if (scrollTop > 400) {
    nav.classList.add("sticky__nav");
  } else {
    nav.classList.remove("sticky__nav");
  }
}, 3);
const projects = [
  {
    link: "https://github.com/RishiMaha/NBA-MVP-Predictor-",
    image: "NBA.png",
    openInNewTab: true,
    title: "NBA Machine Learning",
    description:
      "This project utilizes web scraping, data cleaning, and machine learning to make predictions on the NBA MVP from the 1999-00 season till the 2023-24 season",
  },
  {
    link: "https://github.com/RishiMaha/Python-Nike-Web-Scraping",
    image: "Nike.png",
    openInNewTab: true,
    title: "Nike Web-Scraping",
    description:
      "This project was made to monitor the price of Nike's Air Force 01 shoe and utilizes web-scraping to notify if they price drops to a desired amount",
  },
  {
    link: "https://github.com/RishiMaha/RStudio-Airplane-Analysis",
    image: "Airport.png",
    openInNewTab: true,
    title: "Airport Data Analysis in R",
    description:
      "This project utilizes data cleaning and analysis in RStudio to find the best time to fly out of Chicago O'hare International Airport",
  },
];
const projectHTML = document.querySelector(".projects_content");

displayProjects();
function displayProjects() {
  projectHTML.innerHTML = "";

  for (let i = 0; i < projects.length - 1; i += 2) {
    const html = `<div class="row">
        <div class="item">
            <div class="image__container">
                <a href="${projects[i].link}">
                    <img src="${projects[i].image}">
                </a>
            </div>
            <a href="${projects[i].link}">
                <h2 class="disable-select">${projects[i].title}</h2>
            </a>
            <p>${projects[i].description}</p>
        </div>
        <div class="item">
            <div class="image__container">
                <a href="${projects[i + 1].link}">
                    <img src="${projects[i + 1].image}">
                </a>
            </div>
            <a href="${projects[i + 1].link}">
                <h2 class="disable-select">${projects[i + 1].title}</h2>
            </a>
            <p>${projects[i + 1].description}</p>
        </div>
    </div>`;
    projectHTML.insertAdjacentHTML("beforeend", html);
  }

  let left = projects.length % 2;
  if (left == 1) {
    const html = `
        <div class="row">
            <div class="item">
                <div class="image__container">
                    <a href="${projects[projects.length - 1].link}">
                        <img src="${projects[projects.length - 1].image}">
                    </a>
                </div>
                <a href="${projects[projects.length - 1].link}">
                    <h2 class="disable-select">${
                      projects[projects.length - 1].title
                    }</h2>
                </a>
                <p>${projects[projects.length - 1].description}</p>
            </div>
        </div>`;
    projectHTML.insertAdjacentHTML("beforeend", html);
  }
}


