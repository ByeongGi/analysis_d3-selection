import creator from "../creator";

export default function(name) {
  var create = typeof name === "function" ? name : creator(name);
  return this.select(function() {
    // insert element at DOM.
    // DOM 에 엘리멘트를 자식 NODE 로 삽입한다. 
    // document.appendChild() 이 함수다.
    return this.appendChild(create.apply(this, arguments));
  });
}


