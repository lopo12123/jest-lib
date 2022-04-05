function lk(nums: number[]): number {
    let sumIndex = 0
    for(let i = 1; i < nums.length; i ++) {
        if(nums[i] !== nums[sumIndex]) {
            nums[++sumIndex] = nums[i]
        }
    }
    return sumIndex + 1  // index + 1 === length
}

export {
    lk
}

const ori = [0,0,1,1,1,2,2,3,3,4]
console.log(lk( ori), ori)




