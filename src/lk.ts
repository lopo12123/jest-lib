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

function lk(head: ListNode | null): ListNode | null {
    if(head === null) return null
    else {
        const str = JSON.stringify(head)
        const nums = str.match(/[-]?[0-9]+/g)!

        const preHead = new ListNode()
        let p = preHead
        for(let i = nums.length - 1; i >= 0; i --) {
            p.next = new ListNode(parseInt(nums[i]))
            p = p.next
        }
        return preHead.next
    }
}


export {
    lk
}



