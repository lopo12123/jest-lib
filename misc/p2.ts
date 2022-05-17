/// typescript @4.6.2
/// node @14.17.5

const fs = require('fs')

/**
 * @description 随即方向前进 dis 距离
 * @param dis 前进距离 default: 1
 * @param curr 当前坐标 [x, y]
 */
const rand_forward = (dis: number = 1, curr: [ number, number ]) => {
    const angle = Math.random() * 360 * Math.PI
    curr[0] += dis * Math.sin(angle)
    curr[1] += dis * Math.cos(angle)
    return curr
}

/**
 * @description 到原点距离
 * @param curr
 */
const dis_to_origin = (curr: [ number, number ]) => {
    return Math.sqrt(curr[0] ** 2 + curr[1] ** 2)
}

/**
 * @description 模拟一次
 * @param N 步长
 */
const sim_move = (N: number): { n: number[], dn: number[], sqrt_n: number[] } => {
    const sim_result: { n: number[], dn: number[], sqrt_n: number[] } = { n: [], dn: [], sqrt_n: [] }

    let curr: [ number, number ] = [ 0, 0 ]
    for (let n = 1; n <= N; n++) {
        curr = rand_forward(1, curr)
        sim_result.n.push(n)
        sim_result.dn.push(dis_to_origin(curr))
        sim_result.sqrt_n.push(Math.sqrt(n))
    }

    return sim_result
}

/**
 * @description 模拟多次取平均值
 * @param loop 模拟次数
 * @param N 步长
 */
const sim_by_average = (loop: number, N: number) => {
    const sim_result_pool: { n: number[], dn: number[], sqrt_n: number[] }[] = []

    for (let i = 0; i < loop; i ++) {
        sim_result_pool.push(sim_move(N))
    }

    const average_result: { n: number[], dn: number[], sqrt_n: number[] } = {n: [], dn: [], sqrt_n: []}

    let sum
    for (let n = 0; n < N; n ++) {
        sum = 0
        for (let i = 0; i < loop; i ++) {
            sum += sim_result_pool[i].dn[n]
        }
        average_result.n.push(n+1)
        average_result.dn.push(sum / loop)
        average_result.sqrt_n.push(sim_result_pool[0].sqrt_n[n])
    }

    return average_result
}

// 写入json
fs.writeFileSync('./sim.json', JSON.stringify(sim_by_average(100_000, 200)), { encoding: 'utf-8' })
