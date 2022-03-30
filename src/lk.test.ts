import { lk } from "./lk"

test('test sum', () => {
    expect(lk(123123)).toBe(false)
    expect(lk(12123)).toBe(false)
    expect(lk(1)).toBe(true)
    expect(lk(0)).toBe(true)
    expect(lk(-1)).toBe(false)
    expect(lk(102)).toBe(false)
    expect(lk(121)).toBe(true)
    expect(lk(123321)).toBe(true)
})
