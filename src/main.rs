struct Solution {}

impl Solution {
    pub fn get_kth_magic_number(k: i32) -> i32 {
        use std::collections::{BinaryHeap};
        use std::cmp::Reverse;
        let mut heap: BinaryHeap<Reverse<i32>> = BinaryHeap::from([Reverse(1)]);

        let mut prev: i32 = -1;
        let mut p: i32 = 0;
        while p < k {
            match heap.pop() {
                Some(Reverse(top)) => {
                    if top != prev {
                        prev = top;

                        if top < std::i32::MAX / 3 {
                            heap.push(Reverse(top * 3));
                        }
                        if top < std::i32::MAX / 5 {
                            heap.push(Reverse(top * 5));
                        }
                        if top < std::i32::MAX / 7 {
                            heap.push(Reverse(top * 7));
                        }
                        p += 1;
                    }
                }
                _ => {}
            }
        }

        prev
    }
}


fn main() {
    let num_k = Solution::get_kth_magic_number(643);  // 1937xxxx
    println!("{}", num_k);
}
