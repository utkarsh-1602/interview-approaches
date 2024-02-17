// Create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2 
let nums = {
    a: 100, 
    b: 200,
    title: "My nums"
}

// Answer: 
function multiplyByTwo(nums){
    for(num in nums){
        if(typeof nums[num] == "number"){
            nums[num] = nums[num] * 2;
        }
    }
}

multiplyByTwo(nums)
console.log(nums)