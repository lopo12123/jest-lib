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

function lk(licensePlate: string, words: string[]): string {
    const oriCount: number[] = new Array(26).fill(0)

    for (let i = 0; i < licensePlate.length; i++) {
        if(/[a-zA-Z]/.test(licensePlate[i])) {
            oriCount[licensePlate[i].toLowerCase().charCodeAt(0) - 97] += 1
        }
    }

    let minWord = ''

    for (let j = 0; j < words.length; j++) {
        const wordCount: number[] = new Array(26).fill(0)
        for (let k = 0; k < words[j].length; k++) {
            wordCount[words[j][k].toLowerCase().charCodeAt(0) - 97] += 1
        }

        let satisfy = true
        for (let comp = 0; comp < 26; comp++) {
            if(wordCount[comp] < oriCount[comp]) {
                satisfy = false
                break
            }
        }

        if(satisfy && (minWord === '' || words[j].length < minWord.length)) {
            minWord = words[j]
        }
    }

    return minWord
}

console.log(lk("1s3 PSt",
    ["step","steps","stripe","stepple"]))

export {
    lk
}
