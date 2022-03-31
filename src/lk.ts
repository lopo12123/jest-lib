function lk(left: number, right: number): number[] {
    const judge = (n: number): boolean => {
        if(n < 9) return true
        const copyN = n
        const nums: number[] = []
        while (n >= 1) {
            if(n % 10 === 0) return false
            nums.push(n % 10)
            n = Math.floor(n / 10)
        }

        if([ ...new Set(nums) ].length === 1) return true

        for (let i = 0; i < nums.length; i++) {
            if(copyN % nums[i] !== 0) {
                return false
            }
        }
        return true
    }

    const res: number[] = []
    for (let i = left; i < right + 1; i++) {
        if(judge(i)) res.push(i)
    }

    return res
}

export {
    lk
}
