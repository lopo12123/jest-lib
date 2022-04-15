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

// class NestedInteger {
//     #list: (number | NestedInteger) [] = []
//
//     constructor(val?: number) {
//         if(val !== undefined) this.#list.push(val)
//     }
//
//     isInteger() {
//         return this.#list.length === 1 && typeof this.#list[1] === 'number'
//     }
//
//     getInteger() {
//         return this.isInteger() ? this.#list[0] : null
//     }
//
//     setInteger(val: number) {
//         this.#list = [ val ]
//     }
//
//     add(elem: NestedInteger) {
//         this.#list.push(elem)
//     }
//
//     getList(): NestedInteger[] {
//         return this.isInteger()
//             ? []
//             : this.#list.filter((item) => {
//                 return item instanceof NestedInteger
//             }) as NestedInteger[]
//     }
// }

class MyQueue {
    #store: number[] = []
    #assist: number[] = []

    constructor() {

    }

    push(x: number): void {
        this.#store.push(x)
    }

    pop(): number {
        for (let i = this.#store.length - 1; i >= 0; i--) {
            this.#assist.push(this.#store.pop()!)
        }
        const item = this.#assist.pop()!
        for (let i = this.#assist.length - 1; i >= 0; i--) {
            this.#store.push(this.#assist.pop()!)
        }
        return item
    }

    peek(): number {
        for (let i = this.#store.length - 1; i >= 0; i--) {
            this.#assist.push(this.#store.pop()!)
        }
        const item = this.#assist[this.#assist.length - 1]
        for (let i = this.#assist.length - 1; i >= 0; i--) {
            this.#store.push(this.#assist.pop()!)
        }
        return item
    }

    empty(): boolean {
        return this.#store.length === 0
    }
}

const aa = new MyQueue()
aa.push(1)
console.log(aa.pop())
console.log(aa.empty())

// function lk(nums: number[]): string[] {
//     if(nums.length === 0) return []
//
//     const res: string[] = []
//
//     // 从第一个开始直接计数
//     let start: number = nums[0]
//
//     const last = nums.reduce((prev, curr) => {
//         // 已经开始计数 且遇到终点
//         if(curr - prev !== 1) {
//             // 只计了一个数
//             if(prev === start) {
//                 res.push(start + '')
//             }
//             // 计了多个数
//             else {
//                 res.push(`${start}->${prev}`)
//             }
//             start = curr
//         }
//         return curr
//     })
//
//     if(start === last) {
//         res.push(start + '')
//     }
//     else {
//         res.push(`${start}->${last}`)
//     }
//
//     return res
// }

export {
    // lk
}


