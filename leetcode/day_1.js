var nums = [1,2,3]
// var containsDuplicate = function(nums) {


//     return nums.sort().some((a, i) => a === nums[i + 1 ]);

 
// };

var containsDuplicate = function(nums) {

    console.log(new Set(nums).size)
    return new Set(nums).size < nums.length;
};


console.log(containsDuplicate(nums))