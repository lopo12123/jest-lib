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

class NestedInteger {
    #list: (number | NestedInteger) [] = []

    constructor(val?: number) {
        if(val !== undefined) this.#list.push(val)
    }

    isInteger() {
        return this.#list.length === 1 && typeof this.#list[1] === 'number'
    }

    getInteger() {
        return this.isInteger() ? this.#list[0] : null
    }

    setInteger(val: number) {
        this.#list = [ val ]
    }

    add(elem: NestedInteger) {
        this.#list.push(elem)
    }

    getList(): NestedInteger[] {
        return this.isInteger()
            ? []
            : this.#list.filter((item) => {
                return item instanceof NestedInteger
            }) as NestedInteger[]
    }
}

function lk(nums: number[], k: number): boolean {
    const range = (i: number) => {
        return [Math.max(0, i - k), Math.min(nums.length, i + k)]
    }

    for(let i = 0; i < nums.length; i ++) {
        for(let j = range(i)[0]; j < i; j ++) {
            if(i !== j && nums[i] === nums[j]) return true
        }
    }
    return false
}

export {
    lk
}

console.log(lk([1,2,3,1,2,3], 2))

