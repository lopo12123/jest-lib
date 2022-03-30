import { lk } from "./lk"

test('test sum', () => {
    expect(lk('abcabcbb')).toBe(3)
    expect(lk('bbbbb')).toBe(1)
    expect(lk('pwwkew')).toBe(3)
    expect(lk('')).toBe(0)
    expect(lk(' ')).toBe(1)
    expect(lk('   ')).toBe(1)
    expect(lk(' 12  ')).toBe(3)
    expect(lk('abba')).toBe(2)
    expect(lk(' abccdefaabc')).toBe(5)
    expect(lk('abccba')).toBe(3)
})
