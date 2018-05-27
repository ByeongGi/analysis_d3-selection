import creator from "../creator";

export default function(name) {
  var create = typeof name === "function" ? name : creator(name);
  return this.select(function() {
    // insert element at DOM. 
    return this.appendChild(create.apply(this, arguments));
  });
}
