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

function lk(s: string): boolean {
    let [left, right] = [0, s.length - 1]

    const inRange = (char: string) => {
        let code = char.charCodeAt(0)
        return (code >= 65 && code <= 90) || (code >= 97 && code <= 122) || (code >= 48 && code <= 57)
    }

    while (left < right) {
        if(!inRange(s[left])) left ++
        else if(!inRange(s[right])) right --
        else {
            if(s[left].toLowerCase() !== s[right].toLowerCase()) return false
            else {
                left ++
                right --
            }
        }
    }
    return true
}

export {
    lk
}

console.log(lk("A man, a plan, a canal: Panama"))
