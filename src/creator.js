import namespace from "./namespace";
import {xhtml} from "./namespaces";

function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === xhtml && document.documentElement.namespaceURI === xhtml
        ? document.createElement(name)          // 일반적인 HTML Tag Element 생성시 사용 한다.
        : document.createElementNS(uri, name);  // XHTML 형식의 엘리멘트를 생성시 사용 한다.
  };
}

function creatorFixed(fullname) {
  return function() {
    // ownerDocument 자기 자신의 document 를 반환 받는다.
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
/**
 * 생성한 엘리멘트의 종류에 따라서 선택적으로 creator들을  사용하여 동적으로 엘리멘트를 생성한다. 
 * @param {*} name 
 */
export default function(name) {
  var fullname = namespace(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
}
