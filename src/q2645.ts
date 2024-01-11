function addMinimum(word: string): number {
    // (curr + 3 - prev) % 3 得到需要补足的数量
    const patchCount: number[] = [ 2, 0, 1 ]

    let count = 0

    // 'c'.charCodeAt() === 99
    let prev = 99

    for (let i = 0; i < word.length; i++) {
        const current = word.charCodeAt(i)

        count += patchCount[(current + 3 - prev) % 3]

        prev = current
    }

    switch(word.at(-1)) {
        case 'a':
            count += 2;
            break
        case 'b':
            count += 1;
            break
    }

    return count
}

console.log('2', addMinimum('a'))
console.log('6', addMinimum('aaa'))
console.log('0', addMinimum('abc'))
