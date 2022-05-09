import { lk } from "./lk"

const generate = () => {
    let str = ''
    const len = Math.floor(Math.random() * 20 + 1)
    for (let i = 0; i < len; i++) {
        str += (Math.random() > 0.5 ? 'I' : 'D')
    }
    return str
}

const solve = (arr: number[]) => {
    let res = ''

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] > arr[i - 1]) res += 'I'
        else res += 'D'
    }

    return res
}

test('test sum', () => {
    const toTest: string[] = []
    for (let i = 0; i < 10; i++) {
        toTest.push(generate())
    }

    for (let i = 0; i < 10; i++) {
        console.log(toTest[i])
        expect(solve(lk(toTest[i]))).toEqual(toTest[i])
    }
})