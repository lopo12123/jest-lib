/**
 * 计算 need 份的总花费
 */
const totalCost = (need: number, composition: number[], stock: number[], cost: number[]) => {
    return composition.reduce((total, curr, idx) => {
        return total + (Math.max(curr * need - stock[idx], 0)) * cost[idx]
    }, 0)
}

/**
 * 判断是否有机器可以满足 need 份
 */
const check = (budget: number, need: number, composition: number[][], stock: number[], cost: number[]) => {
    for (const plan of composition) {
        if(totalCost(need, plan, stock, cost) <= budget) return true
    }
    return false
}

function maxNumberOfAlloys(n: number, k: number, budget: number, composition: number[][], stock: number[], cost: number[]): number {
    // n, k 可忽略
    let min = 0
    let max = 2 * 10 ** 8
    let mid = 10 ** 8

    let r = 0

    while (min <= max) {
        const attempt = ~~((min + max) / 2)
        if(check(budget, attempt, composition, stock, cost)) {
            // 足够, +min
            min = attempt + 1
            // 可以
            r = attempt
        } else {
            // 不足, -max
            max = attempt - 1
        }
    }

    return r
}

const r1 = maxNumberOfAlloys(3, 2, 15, [ [ 1, 1, 1 ], [ 1, 1, 10 ] ], [ 0, 0, 0 ], [ 1, 2, 3 ])
const r2 = maxNumberOfAlloys(3, 2, 15, [ [ 1, 1, 1 ], [ 1, 1, 10 ] ], [ 0, 0, 100 ], [ 1, 2, 3 ])
console.log(r1, ' = 2')
console.log(r2, ' = 5')