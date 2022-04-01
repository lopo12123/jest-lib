import { lk } from "./lk"

test('test sum', () => {
    expect(lk(["zyx","wvu","tsr"])).toBe(3)
    expect(lk(["xc","yb","za"])).toBe(0)
    expect(lk(["ca","bb","ac"])).toBe(1)
})
