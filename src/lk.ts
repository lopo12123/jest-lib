function lk(strs: string[]): number {
    const partMap = new Map<number, [ number, number ][] | null>()

    // 兜底 保证第0列不满足也可回退获取范围
    partMap.set(-1, [ [ 0, strs.length ] ])

    // 获取回退最近的一次part map
    const getLastPartMap = (start: number) => {
        for (let i = start; i >= -1; i--) {
            if(!!partMap.get(i)) return partMap.get(i) as [ number, number ][]
        }
        return []
    }

    const doFilter = (strIndex_min: number, strIndex_max: number, charIndex: number): (null | [ number, number ])[] => {
        // 不管其他分段, 当前列处理完后判断再是否有null
        const parts: [ number, number ][] = []
        let storing = false

        for (let strIndex = strIndex_min; strIndex < strIndex_max - 1; strIndex++) {
            // 存在逆序 - 删除当前行, 直接返回上次传入参数 (parts参数被阻塞可不管)
            if(strs[strIndex][charIndex] > strs[strIndex + 1][charIndex]) {
                return [ null ]
            }
            // 存在相同
            else if(strs[strIndex][charIndex] === strs[strIndex + 1][charIndex]) {
                // 未开始存储 左界存入part
                if(!storing) {
                    storing = true
                    parts.push([ strIndex, -1 ])
                }
            }
            // 严格增 (如果正在 storing 则结束)
            else {
                if(storing) {
                    storing = false
                    parts[parts.length - 1][1] = strIndex + 1
                }
            }
        }

        if(parts.length > 0 && parts[parts.length - 1][1] === -1) parts[parts.length - 1][1] = strIndex_max

        console.log(parts, charIndex)
        return parts
    }

    for (let charIndex = 0; charIndex < strs[0].length; charIndex++) {
        const tempPartStore: ([ number, number ] | null)[] = []
        getLastPartMap(charIndex).forEach((part) => {
            tempPartStore.push(...doFilter(...part, charIndex))
        })
        if(!tempPartStore.includes(null)) {
            partMap.set(charIndex, tempPartStore as [ number, number ][])
        }
        else {
            partMap.set(charIndex, null)
        }
    }

    let todelete = 0
    partMap.forEach((item) => {
        if(item === null) todelete += 1
    })
    return todelete
}

export {
    lk
}

// console.log(lk([ "abx", "agz", "bgc", "bfc" ]))  // 1
// console.log(lk([ "vdy", "vei", "zvc", "zld" ]))  // 2
// console.log(lk([ "ca", "bb", "ac" ]))  // 1
console.log(lk([ "zyx", "wvu", "tsr" ]))  // 3
// console.log(lk([ "xc", "yb", "za" ]))  // 0
