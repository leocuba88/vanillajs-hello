/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function genRandomExcuse() {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];
    var randomWho = who[Math.floor(Math.random() * who.length)];
    var randomAction = action[Math.floor(Math.random() * action.length)];
    var randomWhat = what[Math.floor(Math.random() * what.length)];
    var randomWhen = when[Math.floor(Math.random() * when.length)];
    return randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;
  }
  const renderExcuse = () => {
    document.querySelector("#excuse").innerHTML = genRandomExcuse();
  };
  document.querySelector("#btn").addEventListener("click", renderExcuse);
  renderExcuse();
};
