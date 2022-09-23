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

// class Node {
//     val: number
//     next: Node | null
//
//     constructor(val?: number, next?: Node) {
//         this.val = (val === undefined ? 0 : val);
//         this.next = (next === undefined ? null : next);
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

/**
 * @example
 MyLinkedList linkedList = new MyLinkedList();
 linkedList.addAtHead(1);
 linkedList.addAtTail(3);
 linkedList.addAtIndex(1,2);   //链表变为1-> 2-> 3
 linkedList.get(1);            //返回2
 linkedList.deleteAtIndex(1);  //现在链表是1-> 3
 linkedList.get(1);            //返回3
 */
type TwoDirListNode = {
    prev: TwoDirListNode | null
    next: TwoDirListNode | null
    val: number
}

class MyLinkedList {
    #head: TwoDirListNode | null = null
    #tail: TwoDirListNode | null = null
    #count: number = 0

    print() {
        let arr: number[] = []
        let p = this.#head
        while (p !== null) {
            arr.push(p.val)
            p = p.next
        }
        console.log(arr)
    }

    constructor() {
    }

    #findNode(index: number) {
        let _cursor: TwoDirListNode | null
        if(index > this.#count / 2) {
            _cursor = this.#tail
            for (let i = this.#count - 1; i > index; i--) {
                _cursor = _cursor!.prev
            }
        }
        else {
            _cursor = this.#head
            for (let i = 0; i < index; i++) {
                _cursor = _cursor!.next
            }
        }
        return _cursor
    }

    get(index: number): number {
        if(index < 0 || index >= this.#count) return -1

        return this.#findNode(index)!.val
    }

    addAtHead(val: number): void {
        const _newHead: TwoDirListNode = {
            prev: null,
            next: this.#head,
            val
        }

        if(this.#count === 0) {
            this.#head = _newHead
            this.#tail = _newHead
        }
        else {
            this.#head!.prev = _newHead
            this.#head = _newHead
        }

        this.#count += 1
    }

    addAtTail(val: number): void {
        const _newTail: TwoDirListNode = {
            prev: this.#tail,
            next: null,
            val
        }

        if(this.#count === 0) {
            this.#head = _newTail
            this.#tail = _newTail
        }
        else {
            this.#tail!.next = _newTail
            this.#tail = _newTail
        }

        this.#count += 1
    }

    addAtIndex(index: number, val: number): void {
        if(index <= 0) this.addAtHead(val)
        else if(index === this.#count) this.addAtTail(val)
        else if(index > this.#count) return;
        else {
            const _cursor = this.#findNode(index)!

            const _newNode: TwoDirListNode = {
                prev: _cursor!.prev,
                next: _cursor,
                val
            }
            _cursor.prev!.next = _newNode
            _cursor.prev = _newNode

            this.#count += 1
        }
    }

    deleteAtIndex(index: number): void {
        if(index < 0 || index >= this.#count) return
        else {
            const _cursor = this.#findNode(index)!
            const _prev = _cursor.prev
            const _next = _cursor.next

            // 删完
            if(!_prev && !_next) {
                this.#head = null
                this.#tail = null
            }
            // 删头
            else if(!_prev) {
                this.#head = _next
                _next!.prev = null
            }
            // 删尾
            else if(!_next) {
                this.#tail = _prev
                _prev.next = null
            }
            // 中间
            else {
                _prev.next = _next
                _next.prev = _prev
            }

            this.#count -= 1
        }
    }
}

let linkedList: MyLinkedList = new MyLinkedList();
linkedList.addAtHead(-1);
linkedList.addAtTail(1);
linkedList.addAtHead(-2);
linkedList.addAtTail(2);
linkedList.addAtHead(-3);
linkedList.addAtTail(3);

linkedList.addAtIndex(3, 0);
linkedList.print()

linkedList.deleteAtIndex(1);
linkedList.deleteAtIndex(4);
linkedList.print()

// console.log(linkedList.get(1));            //返回2
// linkedList.deleteAtIndex(1);  //现在链表是1-> 3
// console.log(linkedList.get(1));            //返回3

function lk(logs: string[]): number {
    return logs.reduce((prev, curr) => {
        if(curr === './') return prev
        else if(curr === '../') return Math.max(prev - 1, 0)
        else return prev + 1
    }, 0)
}

export {
    lk
}
