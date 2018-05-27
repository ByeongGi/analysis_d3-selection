function none() {}
/**
 * querySelector 를 랩핑 하여 사용한 함수
 * @param {*} selector 
 */
export default function (selector) {
  return selector == null ? none : function () {
    return this.querySelector(selector); // document.querySelector()
  };
}

