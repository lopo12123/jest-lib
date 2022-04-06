import { lk } from "./lk"

test('test sum', () => {
    expect(lk([ 1, 3, 5, 6 ], 5)).toBe(2)
    expect(lk([ 1, 3, 5, 6 ], 2)).toBe(1)
    expect(lk([ 1, 3, 5, 6 ], 7)).toBe(4)
})
