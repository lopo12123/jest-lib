/// typescript @4.6.2
/// node @14.17.5

/**
 * @description AB的命中率
 */
const p_low = 0.5, p_high = 0.6

/**
 * @description 选择数
 * @param select
 * @param total
 */
const num_of_select = (select: number, total: number) => {
    let num = 1
    for (let i = 0; i < select; i++) {
        num *= total - i
    }
    for (let j = 2; j <= select; j++) {
        num /= j
    }
    return num
}

/**
 * @description 0-1分布概率
 * @param rate 为1概率
 * @param hit 为1数量
 * @param total
 */
const p_zero_one = (rate: number, hit: number, total: number) => {
    let p = 1
    for (let i = 0; i < total; i++) {
        p *= i < hit ? rate : (1 - rate)
    }
    return p * num_of_select(hit, total)
}

/**
 * @description n次后的猜测正确率
 * @param n 试验次数
 */
const correct_rate_of_guess = (n: number) => {
    let rate_sum_random = 0
    for (let i = 0; i <= n; i++) {
        rate_sum_random += p_zero_one(p_low, i, n) * p_zero_one(p_high, i, n)
    }

    let rate_sum_obvious = 0
    for (let low = 0; low < n; low++) {
        for (let high = low + 1; high <= n; high++) {
            rate_sum_obvious += p_zero_one(p_low, low, n) * p_zero_one(p_high, high, n)
        }
    }

    return rate_sum_obvious + rate_sum_random / 2
}

/**
 * @description 循环执行找到最小n
 * @param confidence 最小置信
 */
const do_my_guess = (confidence: number) => {
    let guess_n = 1

    while (guess_n < 10_000) {
        if(correct_rate_of_guess(guess_n) >= confidence) return guess_n
        else guess_n += 1
    }

    return -1
}

console.log(do_my_guess(0.95))