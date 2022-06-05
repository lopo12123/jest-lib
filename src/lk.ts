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

// const root: TreeNode = {
//     val: 4,
//     left: {
//         val: 2,
//         left: {
//             val: 1,
//             left: null,
//             right: null
//         },
//         right: {
//             val: 3,
//             left: null,
//             right: null
//         }
//     },
//     right: {
//         val: 6,
//         left: {
//             val: 5,
//             left: null,
//             right: null
//         },
//         right: {
//             val: 7,
//             left: null,
//             right: null
//         }
//     }
// }

const showTime = (fn: () => void) => {
    console.time('fn')
    fn()
    console.timeEnd('fn')
}

function lk(nums: number[], operations: number[][]): number[] {
    const finalOps = new Map()  // 换后的 - 换之前的

    for (let i = 0; i < operations.length; i++) {
        if(finalOps.has(operations[i][0])) {
            finalOps.set(operations[i][1], finalOps.get(operations[i][0]))
            finalOps.delete(operations[i][0])
        }
        else {
            finalOps.set(operations[i][1], operations[i][0])
        }
    }

    const reverse = new Map()

    finalOps.forEach((val, key) => {
        reverse.set(val, key)
    })

    for (let i = 0; i < nums.length; i++) {
        if(reverse.has(nums[i])) {
            nums[i] = reverse.get(nums[i])
        }
    }

    return nums
}

// console.log(lk([ 1, 2 ], [ [ 1, 3 ], [ 2,1 ], [ 3, 2 ] ]))


class TextEditor {
    get chs() {
        return this.#chs
    }

    get cursor() {
        return this.#cursor
    }

    // 一个一个字符
    #chs: string[] = []

    // 光标为某idx+1 表示左边有几个字符
    #cursor = 0

    constructor() {
    }

    addText(text: string): void {
        this.#chs.splice(this.#cursor, 0, ...text)
        this.#cursor += text.length
    }

    deleteText(k: number): number {
        const realDelete = Math.min(this.#cursor, k)
        this.#chs.splice(this.#cursor - realDelete, realDelete)
        this.#cursor -= realDelete
        return realDelete
    }

    cursorLeft(k: number): string {
        this.#cursor = Math.max(0, this.#cursor - k)
        return this.#chs.slice(this.#cursor - Math.min(10, this.#cursor), this.#cursor).join('')
    }

    cursorRight(k: number): string {
        this.#cursor = Math.min(this.#chs.length, this.#cursor + k)
        return this.#chs.slice(this.#cursor - Math.min(10, this.#cursor), this.#cursor).join('')
    }
}

/**
 * ["TextEditor","cursorRight","deleteText","cursorLeft","addText","cursorLeft","cursorRight","cursorLeft","addText","cursorLeft","addText","addText","addText","addText","addText","addText","cursorRight","cursorRight","addText","addText","addText","addText","cursorRight","addText","addText","deleteText","addText","cursorLeft","deleteText","addText","addText","addText","addText","cursorLeft","cursorRight","addText","addText","addText","cursorLeft","addText","deleteText","addText","deleteText","deleteText","cursorRight","addText","cursorRight","addText","addText","deleteText","cursorRight","cursorRight","deleteText","addText","cursorRight","cursorRight","cursorRight","addText","cursorLeft","deleteText","deleteText","cursorRight","cursorLeft","deleteText","addText","deleteText","addText","addText","addText","deleteText","addText"]
 [[],[13],[17],[2],["woyrgb"],[1],[20],[2],["liwisjrgylvpm"],[1],["psoliwmahgdnpbc"],["vlxhvfzqbynxx"],["thwmxwhaltkooqim"],["yfok"],["qehvtuxvhtkibcjgaqsw"],["zsmifuiluczhmwntknav"],[18],[16],["dfjevkudebhnnco"],["wtokffbupoglawqjmhui"],["zoxehzvciyofszbcs"],["fwvk"],[20],["atwopvcufhyxj"],["klasejwyppmsq"],[7],["qdklzkhaczzblijn"],[13],[3],["lck"],["uhbhtqybmtsadxhi"],["dontqizlxn"],["tpbzrr"],[2],[13],["souphmty"],["m"],["pvnvm"],[16],["ektkj"],[10],["lno"],[13],[9],[3],["cpchcxhmjdnup"],[12],["pyjjjbupvdbrzbhvafiz"],["ihyibjfsophrm"],[2],[19],[7],[18],["dbsepzzbxibge"],[19],[1],[12],["h"],[6],[3],[7],[16],[9],[8],["udvagithsllh"],[4],["l"],["bq"],["adevnydcsqdmgbv"],[8],["uqlgoo"]]
 *
 * [null,"",0,"",null,"woyrg","woyrgb","woyr",null,"wisjrgylvp",null,null,null,null,null,null,"wntknavmgb","wntknavmgb",null,null,null,null,"fszbcsfwvk",null,null,7,null,"jklasejqdk",3,null,null,null,null,"qizlxntpbz","zkhaczzbli",null,null,null,"rlzkhaczzb",null,10,null,13,9,"sadxhidlis",null,"phmtympvnv",null,null,2,"bjfsophmjn","bjfsophmjn",18,null,"epzzbxibge","epzzbxibge","epzzbxibge",null,"hvdbsepzzb",3,7,"brzbxibgeh","yjjjbupvdb",8,null,4,null,null,null,8,null]
 * [null,"",0,"",null,"woyrg","woyrgb","woyr",null,"wisjrgylvp",null,null,null,null,null,null,"wntknavmgb","wntknavmgb",null,null,null,null,"fszbcsfwvk",null,null,7,null,"jklasejqdk",3,null,null,null,null,"qizlxntpbz","zlxntpbzrr",null,null,null,"qizlxntpbz",null,10,null,13,9,"jlckuhbhtq",null,"hcxhmjdnup",null,null,2,"hyibjfsoph","hyibjfsoph",18,null,"epzzbxibge","epzzbxibge","epzzbxibge",null,"rzdbsepzzb",3,7,"yjjjbupvdb","xhmjdnuppy",8,null,4,null,null,null,8,null]
 */

// let res: string | number = ''
const tt = new TextEditor()
tt.addText('leetcode')
tt.cursorLeft(4)
tt.addText('aaaaa')
// tt.addText('bbbbb')
// tt.addText('ccccc')
console.log(tt.chs, tt.cursor)
//
// res = tt.deleteText(4)
// console.log(tt.chs, tt.cursor, res)
//
// res = tt.cursorLeft(4)
// console.log(tt.chs, tt.cursor, res)
//
// res = tt.cursorLeft(4)
// console.log(tt.chs, tt.cursor, res)
//
// res = tt.cursorLeft(4)
// console.log(tt.chs, tt.cursor, res)
//
// res = tt.cursorLeft(4)
// console.log(tt.chs, tt.cursor, res)
//
// tt.addText('practice')
// console.log(tt.chs, tt.cursor)
//
// res = tt.cursorRight(4)
// console.log(tt.chs, tt.cursor, res)
//
// res = tt.cursorRight(4)
// console.log(tt.chs, tt.cursor, res)
//
// res = tt.cursorRight(4)
// console.log(tt.chs, tt.cursor, res)


/**
 * practice
 */

export {
    lk
}
