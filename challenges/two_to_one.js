/* Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted 
string, the longest possible, containing distinct letters - each taken only once - 
coming from s1 or s2. */

function longest(s1, s2) {
    let sorted = (s1 + s2).split('').sort().join('');
    let res = '';
    for (let x = 0; x < sorted.length; x++) {
        if (! res.includes(sorted[x])){
            res += sorted[x];
        }
    }
    return res;
}

console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty")
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
console.log(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")


/* Creating a new set from the sum of both strings will be a better practice. 
It creates a set of unique elements*/ 
function best_longest(s1,s2){
    return [...new Set(s1+s2)].sort().join('');
}