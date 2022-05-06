// class ListNode {
//     val: number
//     next: ListNode | null
//
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.next = (next === undefined ? null : next)
//     }
// }

// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.left = (left === undefined ? null : left)
//         this.right = (right === undefined ? null : right)
//     }
// }

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

function lk(bits: number[]): boolean {
    if(bits.length === 1) return true

    const lastZero = bits.lastIndexOf(0, bits.length - 2)

    console.log(lastZero)
    const len = (bits.length - 2) - lastZero

    console.log(len)

    return len % 2 === 0
}

class KthLargest {
    #k: number
    #heap: number[] = [] // 小 - 大

    constructor(k: number, nums: number[]) {
        this.#k = k
        this.#heap = nums.sort((a, b) => a - b).slice(-k)
    }

    add(val: number): number {
        if(this.#heap.length < this.#k) {
            let p = this.#heap.length
            this.#heap[p] = val

            while (this.#heap[Math.floor((p - 1) / 2)] > val && p > 0) {
                this.#heap[p] = this.#heap[Math.floor((p - 1) / 2)]
                this.#heap[Math.floor((p - 1) / 2)] = val
                p = Math.floor((p - 1) / 2)
            }

            return this.#heap[0]
        }
        else {
            if(val <= this.#heap[0]) return this.#heap[0]

            let p = 0
            this.#heap[p] = val

            while ((p * 2 + 1) < this.#k) {
                const diveTo = this.#heap[p * 2 + 1] < (this.#heap[p * 2 + 2] ?? (this.#heap[p * 2 + 1] + 1))
                    ? (p * 2 + 1) : (p * 2 + 2)
                if(this.#heap[diveTo] < val) {
                    this.#heap[p] = this.#heap[diveTo]
                    this.#heap[diveTo] = val
                    p = diveTo
                }
                else break
            }

            return this.#heap[0]
        }
    }
}

const p = new KthLargest(3, [ 4, 5, 8, 2 ])
console.log(p.add(3))  // 4 [1,3,3,5]
console.log(p.add(5))  // 5 [3,3,5,5]
console.log(p.add(10)) // 5 [3,5,5,7]
console.log(p.add(9))  // 8 [4,5,5,7]
console.log(p.add(4))  // 8 [4,5,5,7]

// const p = new KthLargest(3, [])
// console.log(p.add(-3))  // -3 [-3]
// console.log(p.add(-2))  // -3 [-3, -2]
// console.log(p.add(-4)) // -4 [-4, -3, -2]
// console.log(p.add(0))  // -3 [-3, -2, 0]
// console.log(p.add(4))  // -2 [-2, 0, 4]

export {
    lk
}
