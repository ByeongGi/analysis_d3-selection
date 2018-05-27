/**
 * 현재 node 의 Window 객체를 반환한다.
 * @param {*} node 
 */
export default function(node) {  
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
}
