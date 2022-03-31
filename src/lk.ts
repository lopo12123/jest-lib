function lk(s: string): string {
    if(new Set(s.split('')).size === s.length) return s[0]

    let res = s[0]
    for (let i = 0; i < s.length; i++) {
        let left = i, right = i
        while (s[left] === s[right]) {
            right += 1
        }
        right--
        while (left >= 0 && right < s.length && s[--left] === s[++right]) {
        }
        left++

        res = (right - left) > res.length ? s.slice(left, right) : res
    }

    return res
}

export {
    lk
}

console.log(lk('babad'))
