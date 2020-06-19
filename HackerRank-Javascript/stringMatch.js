/*
 * The function is expected to return a BOOLEAN.
 * The function accepts following parameters:
 *  1. STRING_ARRAY words
 *  2. STRING query
 */

function isMember(words, query) {
  for (let i = 0; i < words.length; i++) {
    if (words[i] === query) {
      return true;
      break;
    }
    if (
      // words[i].length === query.length &&
      words[i].charAt(i) === (query[i] || "*")
    ) {
      // if (words[i][i] === (query[i] || "*")) {
      return true;
      break;
    }
  }
  return false;
}

var words = ["foo", "bar", "baz"];

console.log(isMember(words, "foo")); // true   (because 'foo' exists in the list of words)
console.log(isMember(words, "hello")); // false  (because 'hello' does NOT exists in the list of words)
console.log(isMember(words, "f*o")); // true  (because the '*' matches the first 'o' in foo)
console.log(isMember(words, "**")); // false (no two letter words)
console.log(isMember(words, "*az")); // true matches baz
