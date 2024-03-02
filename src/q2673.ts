function minIncrements(n: number, cost: number[]): number {
    const sums: number[] = []
    let max_sum = 0
    const scan = (nodeNo: number, sum: number) => {
        sum += cost[nodeNo - 1]

        if(2 * nodeNo > n) {
            sums[nodeNo] = sum
            if(sum > max_sum) max_sum = sum
        } else {
            scan(2 * nodeNo, sum)
            scan(2 * nodeNo + 1, sum)

        }
    }
    scan(1, 0)

    let op = 0
    const dfs = (nodeNo: number): number => {
        if(nodeNo > n) return -1

        const lack1 = dfs(2 * nodeNo)
        if(lack1 === -1) { // 说明为叶子节点
            return max_sum - sums[nodeNo]
        } else {
            const lack2 = dfs(2 * nodeNo + 1)

            // console.log('lack1: ', lack1)
            // console.log('lack2: ', lack2)
            if(lack1 < lack2) {
                // 操作掉 差异部分
                op += lack2 - lack1
                // console.log('op+=', lack2 - lack1)
                // console.log('shared lack:', lack1)
                // console.log('========')
                // 返回 公共部分
                return lack1
            } else {
                op += lack1 - lack2
                // console.log('op+=', lack1 - lack2)
                // console.log('shared lack:', lack2)
                // console.log('========')
                return lack2
            }
        }
    }
    const root_lack = dfs(1)
    op += root_lack
    // 不能使用 op += dfs(1)

    return op
}

console.log(minIncrements(7, [ 1, 5, 2, 2, 3, 3, 1 ]))
