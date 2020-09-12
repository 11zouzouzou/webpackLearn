import _ from "lodash";
import Icon from "./test.png";
import "./style.css";
import Data from "./data.xml";

import printMe from "./print.js";

import * as ZouTestLiabrary from "webpacklibrary-zou";
function component() {
  //testLibrary
  let q = ZouTestLiabrary;
  console.log(q);
  console.log(q.numToWord(2));
  const element = document.createElement("div");

  // lodash ES6
  // console.log("1");
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

//动态导入load

// async function getDynamicComponent() {
//   const element = document.createElement("div");
//   const { default: _ } = await import(
//     /* webpackChunkName: "lodash" */ "lodash"
//   );
//   // import(/* webpackPrefetch: true */ 'LoginModal');
//   // import(/* webpackPreload: true */ 'ChartingLibrary');
//   //预获取与预加载模块(prefetch/preload module)
//   // bundle 分析(bundle analysis)//分析工具

//   element.innerHTML = _.join(["HelloDynamicComponent", "webpack"], " ");

//   return element;
// }

// getDynamicComponent().then((component) => {
//   document.body.appendChild(component);
// });
