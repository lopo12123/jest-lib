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


function lk(pattern: string, s: string): boolean {
    const words = s.split(' ')

    if(pattern.length !== words.length) return false
    else {
        const hash: {[k: string]: string} = {}
        const hashReverse: {[k: string]: string} = {}

        for (let i = 0; i < pattern.length; i ++) {
            if(hash[pattern[i]] === undefined) {
                if(hashReverse[words[i]] !== undefined) return false
                hash[pattern[i]] = words[i]
                hashReverse[words[i]] = pattern[i]
            }
            else {
                if(hash[pattern[i]] !== words[i]) return false
            }
        }

        return true
    }
}

export {
    // lk
}

// fs.writeFileSync('./res.json', JSON.stringify(lk(139)), { encoding: 'utf-8' })
