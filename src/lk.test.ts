import { lk } from "./lk"


test('test sum', () => {
    const test_axis: number[] = []

    for (let i = 1; i <= 50000; i ++) {
        test_axis[i - 1] = i
        test_axis[99999 - i] = i
    }

    console.time('test')
    expect(lk(test_axis)).toEqual([])
})