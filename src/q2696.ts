function minLength(s: string): number {
    const stack: string[] = []

    for (const char of s) {
        const top = stack.at(-1)

        if(top === 'A' && char === 'B' || top === 'C' && char === 'D') {
            stack.pop()
        } else {
            stack.push(char)
        }
    }

    console.log(stack)
    return stack.length
}
