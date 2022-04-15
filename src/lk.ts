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

function lk(s: string): NestedInteger {
    let ori = JSON.parse(s)

    if(typeof ori === 'number') return new NestedInteger(ori)
    else {
        const dfsSolve = (ori: number | number[]) => {
            if(typeof ori === 'number') return new NestedInteger(ori)
            else {
                const subRes = new NestedInteger()
                for (let j = 0; j < ori.length; j++) {
                    subRes.add(dfsSolve(ori[j]))
                }
                return subRes
            }
        }

        const res = new NestedInteger()
        for (let i = 0; i < ori.length; i++) {
            res.add(dfsSolve(ori[i]))
        }
        return res
    }
}


export {
    lk
}


