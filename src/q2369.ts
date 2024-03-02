function validPartition(nums: number[]): boolean {
    // result of break before 'index'
    const breakpoint: boolean[] = [ true, false, nums[0] === nums[1] ]

    for (let i = 3; i <= nums.length; i += 1) {
        const prev1 = nums[i - 1]
        const prev2 = nums[i - 2]
        const prev3 = nums[i - 3]

        breakpoint[i] =
            // rule1
            breakpoint[i - 2] && prev1 === prev2
            // rule2
            || breakpoint[i - 3] && prev1 === prev2 && prev1 === prev3
            // rule3
            || breakpoint[i - 3] && (prev1 - prev2 === 1) && (prev2 - prev3 === 1)
    }

    return breakpoint[nums.length]
}

// const re = validPartition([ 4, 4, 4, 5, 6 ])
const re = validPartition([ 676575, 676575, 676575, 533985, 533985, 40495, 40495, 40495, 40495, 40495, 40495, 40495, 782020, 782021, 782022, 782023, 782024, 782025, 782026, 782027, 782028, 782029, 782030, 782031, 782032, 782033, 782034, 782035, 782036, 782037, 782038, 782039, 782040, 378070, 378070, 378070, 378071, 378072, 378073, 378074, 378075, 378076, 378077, 378078, 378079, 378080, 378081, 378082, 378083, 378084, 378085, 378086, 378087, 378088, 378089, 378090, 378091, 378092, 378093, 129959, 129959, 129959, 129959, 129959, 129959 ])
console.log('re', re)
