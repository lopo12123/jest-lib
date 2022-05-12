// class ListNode {
//     val: number
//     next: ListNode | null
//
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.next = (next === undefined ? null : next)
//     }
// }

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

// class Node {
//     val: boolean
//     isLeaf: boolean
//     topLeft: Node | null
//     topRight: Node | null
//     bottomLeft: Node | null
//     bottomRight: Node | null
//
//     constructor(val?: boolean, isLeaf?: boolean, topLeft?: Node, topRight?: Node, bottomLeft?: Node, bottomRight?: Node) {
//         this.val = (val === undefined ? false : val)
//         this.isLeaf = (isLeaf === undefined ? false : isLeaf)
//         this.topLeft = (topLeft === undefined ? null : topLeft)
//         this.topRight = (topRight === undefined ? null : topRight)
//         this.bottomLeft = (bottomLeft === undefined ? null : bottomLeft)
//         this.bottomRight = (bottomRight === undefined ? null : bottomRight)
//     }
// }

// class Node {
//     val: number
//     children: Node[]
//
//     constructor(val?: number, children?: Node[]) {
//         this.val = (val === undefined ? 0 : val)
//         this.children = (children === undefined ? [] : children)
//     }
// }

class Heap_big_root {
    readonly #heap: number[] = []  // 大 - 小

    /**
     * @description an copy of inner heap store
     */
    get heap() {
        return this.#heap.slice()
    }

    get size() {
        return this.#heap.length
    }

    constructor(nums: number[]) {
        this.#heap = nums.sort((a, b) => b - a)
    }

    add(val: number) {
        let p = this.#heap.length
        this.#heap[p] = val

        let parentIdx = Math.floor((p - 1) / 2)
        while (p > 0) {
            if(this.#heap[parentIdx] >= val) return;
            else {
                this.#heap[p] = this.#heap[parentIdx]
                this.#heap[parentIdx] = val
                p = parentIdx
                parentIdx = Math.floor((p - 1) / 2)
            }
        }
    }

    delete() {
        if(this.size <= 2) {
            return this.#heap.shift()
        }
        else {
            const head = this.#heap[0]
            const val = this.#heap.pop()!
            this.#heap[0] = val

            let p = 0
            let largeChildIdx = this.#heap[2 * p + 1] > (this.#heap[2 * p + 2] ?? -Infinity) ? (2 * p + 1) : (2 * p + 2)

            while (largeChildIdx < this.size) {
                if(this.#heap[p] >= this.#heap[largeChildIdx]) return head
                else {
                    this.#heap[p] = this.#heap[largeChildIdx]
                    this.#heap[largeChildIdx] = val
                    p = largeChildIdx
                    largeChildIdx = (this.#heap[2 * p + 1] ?? Infinity) > (this.#heap[2 * p + 2] ?? -Infinity) ? (2 * p + 1) : (2 * p + 2)
                }
            }

            return head
        }
    }
}

function lk(stones: number[]): number {
    const queue = new Heap_big_root(stones)

    while (queue.size > 1) {
        let t1 = queue.delete()!
        let t2 = queue.delete()!
        if(t1 !== t2) queue.add(Math.abs(t1 - t2))
    }

    return queue.delete() ?? 0
}

console.log(lk([ 3, 3, 2, 1, ]))

// const showTime = (fn: () => void) => {
//     console.time('fn')
//     fn()
//     console.timeEnd('fn')
// }
// showTime(() => {
//     // console.log(lk([ 'daeabc', 'aaeb', 'abacdc' ]))
// })

export {
    lk
}
