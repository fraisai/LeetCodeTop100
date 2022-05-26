/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // METHOD 1:
//     let max = 0;
//     nums.reduce((obj, key) => {
//         key in obj ? obj[key] += 1 : obj[key] = 1;
//         if (obj[key] > max) max += 1;
//         return obj;
//     }, {})
//     if (max >= 2) return true;
//     return false;
    
    // METHOD 2:
    let newArr = Array.from(new Set(nums));
    return newArr.length < nums.length ? true : false;
};
