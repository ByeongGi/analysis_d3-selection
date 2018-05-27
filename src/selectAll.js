import {Selection, root} from "./selection/index";
/**
 * querySelectorAll 를 사용하여 여러개의 selector 의 정보를 가져오는 함수
 * @param {*} selector 
 */
export default function(selector) {
  return typeof selector === "string"
      ? new Selection([document.querySelectorAll(selector)], [document.documentElement])
      : new Selection([selector == null ? [] : selector], root);
}
