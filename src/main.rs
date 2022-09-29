use std::ops::Add;

struct Solution {}

impl Solution {
    pub fn is_fliped_string(s1: String, s2: String) -> bool {
        if s1.len() != s2.len() { return false; }

        let ss = s1.clone() + s1.as_str();
        return ss.find(&s2) != None;
    }
}


fn main() {
    let r1 = Solution::is_fliped_string("122".to_string(), "211".to_string());

    println!("{r1}");
}
