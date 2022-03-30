function lk(x: number): boolean {
    if(x < 0) return false
    else {
        const xStr = x.toString()
        for(let i = 0; i < xStr.length / 2; i ++) {
            if(xStr[i] !== xStr[xStr.length - 1 - i]) return false
        }
        return true
    }
}

export {
    lk
}

console.log(lk(11))  // -1 1
