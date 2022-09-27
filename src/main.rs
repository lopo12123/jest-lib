struct Solution {}

impl Solution {
    pub fn check_permutation(s1: String, s2: String) -> bool {
        let len = s1.len();
        let mut _map: std::collections::HashMap<&str, i32> = std::collections::HashMap::new();

        if len != s2.len() {
            return false;
        }

        for i in 0..len {
            *_map.entry(&s1[i..i + 1]).or_insert(0) += 1;
            *_map.entry(&s2[i..i + 1]).or_insert(0) -= 1;
        }

        for (_, v) in _map {
            if v != 0 {
                return false;
            }
        }
        true
    }
}


fn main() {
    println!("{}", Solution::check_permutation(String::from("aa"), String::from("ac")));
    println!("{}", Solution::check_permutation(String::from("caa"), String::from("aca")));
    println!("{}", Solution::check_permutation(String::from("aca"), String::from("acc")));
    println!("{}", Solution::check_permutation(String::from("acv"), String::from("vca")));
}
