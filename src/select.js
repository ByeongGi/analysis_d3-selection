import {Selection, root} from "./selection/index";
/**
 * 해당 선택자로 된 Selection 객체로 랩핑하여 생성한다.
 * @param {*} selector 
 */
export default function(selector) {
  return typeof selector === "string"
      ? new Selection([[document.querySelector(selector)]], [document.documentElement])
      : new Selection([[selector]], root);
}
