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


function lk(root: TreeNode | null): string[] {
    if(root === null) return []

    if(!root.left && !root.right) return [root.val + '']

    const res: string[] = []

    const dfs = (subRoot: TreeNode | null, pathStr: string) => {
        if(subRoot === null) return
        else {
            if(!subRoot.left && !subRoot.right) res.push(pathStr + '->' + subRoot.val)
            else {
                dfs(subRoot.left, pathStr + '->' + subRoot.val)
                dfs(subRoot.right, pathStr + '->' + subRoot.val)
            }
        }
    }

    dfs(root.left, root.val + '')
    dfs(root.right, root.val + '')

    return res
}

export {
    // lk
}

// fs.writeFileSync('./res.json', JSON.stringify(lk(139)), { encoding: 'utf-8' })
