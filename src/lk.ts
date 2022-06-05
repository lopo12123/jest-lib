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

function lk(digits: string): string[] {
    const map: string[][] = [
        [],
        [], [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ],
        [ 'g', 'h', 'i' ], [ 'j', 'k', 'l' ], [ 'm', 'n', 'o' ],
        [ 'p', 'q', 'r', 's' ], [ 't', 'u', 'v' ], [ 'w', 'x', 'y', 'z' ]
    ]

    if(digits.length === 0) return []
    // @ts-ignore
    else if(digits.length === 1) return map[digits[0]]
    else {
        const allMapping: string[] = []
        const bits = digits.split('').map(x => parseInt(x))
        const how_many_for = bits.length

        for (let i = 0; i < map[bits[0]].length; i++) {
            for (let j = 0; j < map[bits[1]].length; j++) {
                if(how_many_for === 2) {
                    allMapping.push(map[bits[0]][i] + map[bits[1]][j])
                }
                else {
                    for (let k = 0; k < map[bits[2]].length; k++) {
                        if(how_many_for === 3) {
                            allMapping.push(map[bits[0]][i] + map[bits[1]][j] + map[bits[2]][k])
                        }
                        else {
                            for (let l = 0; l < map[bits[3]].length; l++) {
                                allMapping.push(map[bits[0]][i] + map[bits[1]][j] + map[bits[2]][k] + map[bits[3]][l])
                            }
                        }
                    }
                }
            }
        }

        return allMapping
    }
}


export {
    lk
}
