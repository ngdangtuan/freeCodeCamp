function reverseString(str) {
  var array = str.split("");
  array = array.reverse();
  str = array.join("");
  return str;
}

reverseString("hello"); /* olleh */

reverseString("Greetings from Earth"); /* htraE morf sgniteerG */
