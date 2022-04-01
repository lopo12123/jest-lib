function lk(arr: number[]): boolean {
    // map
    const count: { [k: number]: number } = {}
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]] = count[arr[i]] ? count[arr[i]] + 1 : 1
    }

    // sort
    arr.sort((a, b) => Math.abs(a) - Math.abs(b))

    for (let j = 0; j < arr.length; j++) {
        if(count[arr[j]] === 0) continue

        if(!count[arr[j] * 2]) {
            return false
        }
        else {
            count[arr[j]] -= 1
            count[arr[j] * 2] -= 1
        }
    }

    return true
}

export {
    lk
}

console.log(lk([1,2,2,4,4,8]))
