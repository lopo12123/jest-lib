struct Solution {}

impl Solution {
    pub fn is_palindrome(x: i32) -> bool {
        if x < 0 {
            return false;
        }
        if x == 0 {
            return true;
        }

        let mut xx = x;
        let mut bits = vec![];
        while xx > 0 {
            bits.push(xx % 10);
            xx = (xx - xx % 10) / 10;
        }

        let mut l = 0;
        let mut r = bits.len() - 1;

        while l < r {
            if bits[l] != bits[r] {
                return false;
            } else {
                l += 1;
                r -= 1;
            }
        }

        true
    }
}

fn main() {}
