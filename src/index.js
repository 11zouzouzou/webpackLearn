import _ from "lodash";
import Icon from "./test.png";
import "./style.css";
import Data from "./data.xml";

import printMe from "./print.js";
function component() {
  const element = document.createElement("div");

  // lodash ES6
  console.log("1");
  element.innerHTML = _.join(["Hello1", "webpack"], " ");
  element.classList.add("hello"); //add css

  // 将图像添加到我们已经存在的 div 中。
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data); //打印info

  return element;
}

function printButton() {
  const element = document.createElement("div");
  const btn = document.createElement("button");
  element.innerHTML = _.join(["Hello2", "webpack"], " ");
  btn.innerHTML = "点击这里，然后查看 Info！";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

document.body.appendChild(printButton());
