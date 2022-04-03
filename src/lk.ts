function lk(strs: string[]): string {
    const prefix: string[] = []

    let columnChar: string

    for(let i = 0; i < strs[0].length; i ++) {
        columnChar = strs[0][i]
        for(let j = 0; j < strs.length; j ++) {
            if(strs[j][i] === undefined || strs[j][i] !== columnChar) {
                return prefix.join('')
            }
        }
        prefix.push(columnChar)
    }
    return prefix.join('')
}

export {
    lk
}


