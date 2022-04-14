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

function lk(n: number): number {
    // return parseInt(n.toString(2).split('').reverse().join(''), 2)
    let b = BigInt(n)
    const rev = [0n, 8n, 4n, 12n, 2n, 10n, 6n, 14n, 1n, 9n, 5n, 13n, 3n, 11n, 7n, 15n]
    let ans = 0n;
    for(let i = 1; i <= 8; i++){
        ans = ans << 4n | rev[Number(b & 15n)];
        b >>= 4n;
    }
    return Number(ans);
}



export {
    lk
}

console.log(lk(0b00000010100101000001111010011100))

