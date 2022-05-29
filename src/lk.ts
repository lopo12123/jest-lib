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

function lk(turnedOn: number): string[] {
    if(turnedOn === 0) return [ '0:00' ]

    const getTime = (num: number) => {
        const hh = (num & 0b1111000000) >> 6
        const mm = num & 0b111111

        let p = 0
        while (num > 0) {
            p += num & 0b1
            num >>= 1
        }
        if(p !== turnedOn) return ''

        if(hh < 12 && mm < 60) return hh + ':' + (mm < 10 ? ('0' + mm) : mm)

        return ''
    }

    const times: string[] = []

    for (let i = 0; i < 1024; i++) {
        const time = getTime(i)
        if(time !== '') times.push(time)
    }

    return times
}

const getTime = (num: number) => {
    const hh = num & 0b1111000000 >> 6
    const mm = num & 0b111111

    let p = 0
    while (num > 0) {
        p += num & 0b1
        num >>= 1
    }
    if(p !== 1) return ''

    console.log('hh: ', hh, 'mm: ', mm)

    if(hh < 12 && mm < 60) return hh + ':' + (mm < 10 ? ('0' + mm) : mm)

    return ''
}

console.log(getTime(0b1000000))

// console.log(lk('030'))

// const showTime = (fn: () => void) => {
//     console.time('fn')
//     fn()
//     console.timeEnd('fn')
// }
// showTime(() => {
//     console.log(lk('pale', 'ple'))
// })

export {
    lk
}
