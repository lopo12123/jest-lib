class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

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

function lk(root: TreeNode | null) {

}

export {
    lk
}


class MinStack {
    #stack: [number, number][] = []  // [val, min]

    constructor() {

    }

    push(val: number): void {
        if(this.#stack.length === 0) {
            this.#stack.push([val, val])
        }
        else {
            this.#stack.push([val, Math.min(val, this.#stack[this.#stack.length - 1][1])])
        }
    }

    pop(): void {
        this.#stack.pop()
    }

    top(): number {
        return this.#stack[this.#stack.length - 1][0]
    }

    getMin(): number {
        return this.#stack[this.#stack.length - 1][1]
    }
}
