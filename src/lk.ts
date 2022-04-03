function lk(s: string): boolean {
    const toPush: {[k: string]: number} =  {
        '(': 1,
        '[': 2,
        '{': 3
    }
    const toPop: {[k: string]: number} = {
        '}': -3,
        ']': -2,
        ')': -1
    }
    const stack: number[] = []

    for(let i = 0; i < s.length; i ++) {
        if(toPush[s[i]]) stack.push(toPush[s[i]])
        else if(toPop[s[i]]) {
            if((toPop[s[i]] + stack[stack.length - 1]) !== 0) return false
            else {
                stack.pop()
            }
        }
    }
    return stack.length === 0
}

export {
    lk
}

console.log(lk('()'))


