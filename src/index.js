import _ from "lodash";
function component() {
  const element = document.createElement("div");

  // lodash ES6
  console.log("1");
  element.innerHTML = _.join(["Hello1", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
