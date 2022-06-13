struct Solution {}

impl Solution {
    pub fn longest_common_prefix(strs: Vec<String>) -> String {
        if strs.len() == 1 || strs[0] == "" {
            return String::from(&strs[0]);
        }

        let mut common_prefix: Vec<&str> = vec![];

        let mut i = 0;
        while i < strs[0].len() {
            common_prefix.push(&strs[0][i..i + 1]);
            i += 1;
        }

        let mut i = 1;
        while i < strs.len() {
            let m = std::cmp::min(common_prefix.len(), strs[i].len());
            let mut j = 0;
            while j < m {
                if &strs[i - 1][j..j + 1] != &strs[i][j..j + 1] {
                    common_prefix.splice(j.., vec![]);
                    break;
                }
                j += 1;
            }

            if common_prefix.len() == 0 {
                return String::from("");
            }

            if common_prefix.len() >= m {
                common_prefix.splice(m.., vec![]);
            }


            // println!("{:?}", common_prefix);

            i += 1;
        }

        let mut s = String::from("");
        for ch in common_prefix.iter() {
            s += *ch;
        }
        s
    }
}

fn main() {
    // Solution::longest_common_prefix(vec![
    //     String::from("flower"),
    //     String::from("flow"),
    //     String::from("flight"),
    // ]);
    Solution::longest_common_prefix(vec![
        String::from("a"),
        String::from("aca"),
        String::from("accb"),
        String::from("b"),
    ]);
}
