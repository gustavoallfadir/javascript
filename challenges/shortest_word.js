/* Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
    return s.split(' ').sort(function(a,b){return b.length - a.length}).reverse()[0].length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort("turns out random test cases are easier than writing out basic ones")); 


/* This version uses map and => for a best practice and more modern approach*/
function _findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}