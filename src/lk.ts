function lk(nums: number[], val: number): number {
    let sumIndex = 0
    for(let i = 0; i < nums.length; i ++) {
        if(nums[i] !== val) {
            nums[sumIndex++] = nums[i]
        }
    }
    return sumIndex  // index + 1 === length
}

export {
    lk
}

const ori = [3,2,2,3]
console.log(lk(ori, 3), ori)




