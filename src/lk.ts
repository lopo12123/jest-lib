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

function lk(root: TreeNode | null): number {
    if(root === null) return 0;

    let sum = 0;

    const dfsSum = (subRoot: TreeNode, left: boolean) => {
        if(subRoot.left === null && subRoot.right === null) sum += left ? subRoot.val : 0;
        else {
            subRoot.left ? dfsSum(subRoot.left, true) : ''
            subRoot.right ? dfsSum(subRoot.right, false) : ''
        }
    }

    dfsSum(root, false);

    return sum;
}

export {
    lk
}

const tree = new TreeNode(1)
tree.left = new TreeNode(2)
tree.right = new TreeNode(3)

console.log(lk(tree))