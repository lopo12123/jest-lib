use std::process::id;

struct Solution {}

impl Solution {
    pub fn decrypt(code: Vec<i32>, k: i32) -> Vec<i32> {
        let n = code.len();
        if k == 0 {
            return vec![0; n];
        }

        let k_abs = k.abs() as usize;
        let mut window_value = code.get(0..k_abs).unwrap().iter().sum::<i32>();
        let mut decoded = vec![window_value];

        for i in 1..n {
            window_value -= code[i - 1];
            window_value += code[(i - 1 + k_abs) % n];
            decoded.push(window_value);
        }

        if k > 0 {
            decoded.rotate_left(1);
        } else {
            decoded.rotate_right(k_abs);
        }

        decoded
    }
}


fn main() {
    let a1 = Solution::decrypt(vec![5, 7, 1, 4], 3);
    let a2 = Solution::decrypt(vec![1, 2, 3, 4], 0);
    let a3 = Solution::decrypt(vec![2, 4, 9, 3], -2);

    println!("{:?}", a1);
    println!("{:?}", a2);
    println!("{:?}", a3);
}
