function lk(s: string): number {
    if(s.length <= 1) {
        return s.length
    }

    const maxHis = []
    const nextCharMap: {[k: string]: number}= {}

    let left = -1
    let currentMax = 0

    for(let i = 0; i < s.length; i ++) {
        // 无重复字符出现
        if(nextCharMap[s[i]] === undefined) {
            // 保存下当前字符的位置信息
            nextCharMap[s[i]] = i
            // 当前串的最大长度++
            currentMax++
        }
        // 有重复字符出现
        else {
            // 移动左界
            left = Math.max(nextCharMap[s[i]] - 1, left)
            // 更新字符位置信息
            nextCharMap[s[i]] = i
            // 存下当前串的max
            maxHis.push(currentMax)
            // 更新max以记录新串
            currentMax = i - left - 1
        }
    }

    return Math.max(...maxHis, currentMax)
}

export {
    lk
}

console.log(lk('abba'))  // -1 1
