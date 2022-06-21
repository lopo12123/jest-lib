struct Solution {}

impl Solution {
    pub fn defang_i_paddr(address: String) -> String {
        let mut new_addr = String::from("");

        let mut start = 0;
        let mut p = 0;

        while p < address.len() {
            if &address[p..p + 1] == "." {
                new_addr.push_str(&address[start..p]);
                new_addr.push_str("[.]");
                start = p + 1;
            }
            p += 1;
        }
        new_addr.push_str(&address[start..p]);

        new_addr
    }
}


fn main() {
    println!("{:?}", Solution::defang_i_paddr(String::from("1.1.1.1")));
}
