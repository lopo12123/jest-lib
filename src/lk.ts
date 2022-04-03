function lk(s: string): number {
    let sum = 0
    for(let i = 0; i < s.length; i ++) {
        if(s[i] === 'I') sum += (s[i + 1] === 'V' || s[i + 1] === 'X') ? -1 : 1
        else if(s[i] === 'X') sum += (s[i + 1] === 'L' || s[i + 1] === 'C') ? -10 : 10
        else if(s[i] === 'C') sum += (s[i + 1] === 'D' || s[i + 1] === 'M') ? -100 : 100
        else {
            switch (s[i]) {
                case 'V':
                    sum += 5
                    break
                case 'L':
                    sum += 50
                    break
                case 'D':
                    sum += 500
                    break
                case 'M':
                    sum += 1000
            }
        }
    }
    return sum
}

export {
    lk
}


