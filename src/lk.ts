// @ts-ignore
function lk(letters: string[], target: string): string {
    if(target >= letters[letters.length - 1]) return letters[0]
    for(let i = 0; i < letters.length; i ++) {
        if(letters[i] > target) return letters[i]
    }
}

export {
    lk
}


