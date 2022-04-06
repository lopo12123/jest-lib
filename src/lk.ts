function lk(nums: number[], target: number): number {
    if(target <= nums[0]) return 0
    else if(target > nums[nums.length - 1]) return nums.length

    let place = 0
    let scope = nums

    while (scope.length > 1) {
        const partLength = Math.floor(scope.length / 2)
        if(scope[partLength-1] < target && target <= scope[partLength]) return place + partLength
        else if(scope[partLength - 1] === target) return place + partLength - 1
        else if(target < scope[partLength - 1]) scope.splice(partLength)
        else if(target > scope[partLength]) {
            place += partLength
            scope.splice(0, partLength)
        }
    }
    return place + 1
}

export {
    lk
}

console.log(lk([1,3,5,6], 5))




