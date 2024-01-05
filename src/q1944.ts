function canSeePersonsCount(heights: number[]): number[] {
    /**
     * 一个递减的数组, 截断它使得其最小值大于 threshold
     * @param arr
     * @param threshold
     * @return {number} 弹出了几个元素
     */
    const popUntilThenPush = (arr: number[], threshold: number): number => {
        let count = 0

        // do 'popUntil'
        while (arr.length > 0 && arr[arr.length - 1] < threshold) {
            arr.pop()
            count += 1
        }

        // 栈底还有人, 可以看到
        if(arr.length > 0) count += 1

        // do 'push'
        arr.push(threshold)
        return count
    }

    // 递减栈
    const stack: number[] = []
    const ans: number[] = []
    for (let i = heights.length - 1; i >= 0; i--) {
        const curr = heights[i]
        ans[i] = popUntilThenPush(stack, curr)
    }

    return ans
}

const popUntilThenPush = (arr: number[], threshold: number): number => {
    let count = 0

    // do 'popUntil'
    while (arr.length > 0 && arr[arr.length - 1] < threshold) {
        arr.pop()
        count++
    }

    // do 'push'
    arr.push(threshold)
    return count
}



