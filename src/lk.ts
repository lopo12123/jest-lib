/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class NumArray {
    // 分段 100
    private partSum: number[] = []
    private numArr: number[]

    constructor(nums: number[]) {
        let tempSum = 0
        this.numArr = nums
        for(let i = 0; i < nums.length; i ++) {
            if(i > 0 && i % 100 === 0) {
                this.partSum.push(tempSum)
                tempSum = 0
            }
            tempSum += nums[i]
        }
        console.log(this.partSum)
    }

    update(index: number, val: number): void {
        this.partSum[Math.floor(index / 100)] += val - this.numArr[index]
        this.numArr[index] = val
    }

    sumRange(left: number, right: number): number {
        let sum = 0
        const [borderL, borderR] = [Math.ceil(left / 100), Math.floor(right / 100)]
        if(borderR < borderL) {
            for (let z = left; z < right + 1; z ++) {
                sum += this.numArr[z]
            }
            return sum
        }
        else {
            for(let i = left; i < borderL * 100; i ++) {
                sum += this.numArr[i]
            }
            for(let j = borderL; j < borderR; j ++) {
                sum += this.partSum[j]
            }
            for (let k = borderR * 100; k < right + 1; k ++) {
                sum += this.numArr[k]
            }
            return sum
        }
    }
}

const ori: number[] = []
ori[101] = 1
ori.fill(0)
ori[0] = 1
ori[1] = 1
// console.log(ori)
const numArray = new NumArray(ori);
let sumTest = numArray.sumRange(0, 101); // 返回 1 + 3 + 5 = 9
numArray.update(1, 1);   // nums = [1,2,5]
let sumTest2 = numArray.sumRange(0, 101); // 返回 1 + 2 + 5 = 8

console.log(sumTest, sumTest2)

// function lk() {
//
// }
//
// export {
//     lk
// }




