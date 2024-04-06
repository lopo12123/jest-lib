const SEG = 16;

/**
 * 将 nth 分解为 2的幂的序列
 */
const get_path = (nth: number): number[] => {
    const path: number[] = []
    while (nth > 0) {
        const exp = ~~Math.log2(nth)
        const power = 2 ** exp
        path.push(exp)
        nth -= power
    }
    return path
}

class TreeAncestor {
    #matrix: number[][];

    constructor(n: number, parent: number[]) {
        // 空间
        this.#matrix = Array.from({ length: n }, () => Array(SEG).fill(-1));

        // 第一层 (2^0)
        for (let i = 0; i < n; i++) {
            this.#matrix[i][0] = parent[i];
        }

        // 第二层开始 (2^1 - 2^15)
        for (let lv = 1; lv < SEG; lv++) {
            for (let i = 0; i < n; i++) {
                // 第 2^(lv-1) 个父节点的值
                const half = this.#matrix[i][lv - 1]
                if(half !== -1) this.#matrix[i][lv] = this.#matrix[half][lv - 1]
            }
        }
    }

    getKthAncestor(node: number, k: number): number {
        const path = get_path(k)

        let nth_p = node
        for (const exp of path) {
            nth_p = this.#matrix[nth_p][exp]
            if(nth_p === -1) return -1
        }
        return nth_p
    }
}