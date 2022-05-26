 * @param {string} s
 * @return {number}
 */
// 13. Roman to Integer
// Given a roman numeral, convert it to an integer.
// https://leetcode.com/problems/roman-to-integer/
var romanToInt = function(s) {
    let newS = s.split("");
    let convert = {
        "I": 1, 
        "IV": 4,
        "V": 5,
        "IX": 9,
        "X": 10, 
        "XL": 40,
        "L": 50, 
        "XC": 90,
        "C": 100, 
        "CD": 400,
        "D": 500,
        "CM": 900,
        "M": 1000
    };
    
    let total = 0;
    
    for (let i = 0; i < newS.length; i++) {
        let curr = newS[i];
        let next = newS[i+1]
        if (curr === "I" && next === "V") {
            total = total + convert["IV"];
            i++;
            console.log("IV", total)
        } else if (curr === "I" && next === "X") {
            total = total + convert["IX"]
            i++;
            console.log(total)
        } else if (curr === "X" && next === "L") {
            total = total + convert["XL"];
            i++;
            console.log(total)
        } else if (curr === "X" && next === "C") {
            total = total + convert["XC"]
            i++;
            console.log(total)
        } else if (curr === "C" && next === "D") {
            total = total + convert["CD"]
            i++;
            console.log(total)
        } else if (curr === "C" && next === "M") {
            total = total + convert["CM"]
            i++;
            console.log(total)
        } else {
            total = total + convert[curr];
            console.log(total)
        }
    }
    return total;
    
};
