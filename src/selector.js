function none() {}
/**
 * querySelector 를 랩핑 하여 사용한 함수
 * @param {*} selector 
 */
export default function (selector) {
  return selector == null ? none : function () {
    // 이게 원래 머나면 
    return this.querySelector(selector);
  };
}

// $('');
// document.querySelector(); 어 네이티브로dom 셀렉터로 쓸수 있어 이제 지원해 예전에는 지원안했어 .ㅋ
// jquery? $ 선택자인가?