use std::process::id;

struct Solution {}

impl Solution {
    pub fn reformat(s: String) -> String {
        let mut res = String::from("");
        let mut digits: Vec<char> = vec![];
        let mut chars: Vec<char> = vec![];

        for char in s.chars() {
            if char.is_ascii_digit() { digits.push(char) } else { chars.push(char) }
        }

        if ((digits.len() - chars.len()) as i32).abs() > 1 {
            return res;
        } else if digits.len() > chars.len() {
            res.push(digits[0]);
            for idx in 0..chars.len() {
                res.push(chars[idx]);
                res.push(digits[idx + 1]);
            }
        } else if digits.len() < chars.len() {
            res.push(chars[0]);
            for idx in 0..digits.len() {
                res.push(digits[idx]);
                res.push(chars[idx + 1]);
            }
        } else {
            for idx in 0..digits.len() {
                res.push(digits[idx]);
                res.push(chars[idx]);
            }
        }

        return res;
    }
}


fn main() {}
