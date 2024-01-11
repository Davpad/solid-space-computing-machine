/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  let randomNumber = Math.random() * 10;
  document.querySelector(`#excuse`).innerHTML = generateExcuse();
  console.log(`Hello Rigo from the console! ` + randomNumber);
};

let generateExcuse = () => {
  let who = ["My dog", "The cat", "The doctor", "My router"];
  let action = ["bite", "cut", "smashed", "stopped"];
  let what = ["the wire", "my work", "the WiFi signal"];
  let when = [
    "while I was sleeping",
    "when I was online",
    "during our meeting",
    "this morning",
    "by the time I was working"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
