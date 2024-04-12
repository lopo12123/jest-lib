function findChampion(grid: number[][]): number {
    // 找到1最多的行(或 0最多的列)
    return grid
        // 每一行
        .map((row, idx) => [
            // 和
            row.reduce((sum, cur) => sum + cur),
            // 下标
            idx
        ])
        // 大到小
        .sort((a, b) => b[0] - a[0])
        // 和最大
        [0]
        // 的下标
        [1]
}