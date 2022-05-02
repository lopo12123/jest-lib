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

function lk(code: string): boolean {
    // 不是标签包围的直径返回false
    if(code[0] !== '<' && code[code.length - 1] !== '>') return false

    const code_without_cdata = code.replace(/<!\[(cdata|CDATA)\[[\s\S]*?]]>/g, '-')

    const tags: string[] = code_without_cdata.match(/<\/?[A-Z]*>/g) ?? []
    const tag_num = tags.length

    // console.log('no cdata: ', code_without_cdata)
    // console.log('tags: ', tags)

    // 奇数tag不能成对
    if(tag_num % 2 === 1 || tag_num < 2) return false
    // 最外层标签不匹配或不在最外围
    if(
        tags[0].toUpperCase() !== tags[0]
        || tags[0].slice(1) !== tags[tag_num - 1].slice(2)
        || code.slice(0, tags[0].length) !== tags[0]
        || code.slice(code.length - tags[tag_num - 1].length) !== tags[tag_num - 1]
    ) return false

    const tag_stack: string[] = []
    for (let i = 0; i < tag_num; i++) {
        // 标签非大写字母
        if(tags[i].toUpperCase() !== tags[i]) {
            // console.log('not upper case: ', tags[i], i)
            return false
        }

        // 左标签
        if(tags[i][1] !== '/') {
            // 标签过长过短
            if(tags[i].length > 11 || tags[i].length < 3) return false
            tag_stack.unshift(tags[i].slice(1))
        }
        // 右标签
        else {
            // 标签过长过短
            if(tags[i].length > 12 || tags[i].length < 3) return false
            if(tag_stack[0] !== tags[i].slice(2)) {
                // console.log(tags[i], i)
                return false
            }
            else tag_stack.shift()
        }
    }

    if(tag_stack.length !== 0) return false

    const code_without_tag = code_without_cdata.replace(/<\/?[A-Z]*>/g, '')

    // console.log('no tag: ', code_without_tag)

    return !code_without_tag.includes('<')
}


// console.log(lk("<DIV>This is the first line <![CDATA[<div> <![cdata]> [[]]</div>   ]]>  <DIV> <A>  <![CDATA[<b>]]>  </A>  <A> <C></C></A></DIV>    </DIV>"))
// console.log(lk("<A></A><B></B>"))
// console.log(lk("<A></A>>"))
console.log(lk("<DIV><YFSYYS><UVBNIQ><XPMXUNT><WNGMV><OJJGQREMT><Z><GEJDP><LIQS><NCVYU><RAS><UYFKCJCDN><NA><POJVYT><Z><TDC><VUIZQC><BNANGX><TOF><MR>MK</MR></TOF></BNANGX></VUIZQC></TDC></Z></POJVYT></NA></UYFKCJCDN></RAS></NCVYU></LIQS></GEJDP></Z></OJJGQREMT></WNGMV></XPMXUNT></UVBNIQ></YFSYYS></DIV>"))
// console.log(lk("<A><A>456</A>  <A> 123  !!  <![CDATA[]]>  123 </A>   <A>123</A></A>"))
// console.log(lk("<DIV>This is the first line <![CDATA[<div>]]></DIV>"))
// console.log(lk("<DIV>>>  ![cdata[]] <![CDATA[<div>]>]]>]]>>]</DIV>"))

export {
    lk
}
