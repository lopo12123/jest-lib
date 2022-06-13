struct Solution {}

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut set: std::collections::HashMap<i32, usize> = std::collections::HashMap::new();

        let mut i = 0;
        while i < nums.len() {
            if set.contains_key(&nums[i]) {
                return vec![set.get(&nums[i]).unwrap().clone() as i32, i as i32];
            }

            set.insert(target - nums[i], i);

            i += 1;
        }

        return vec![0, 0];
    }
}

fn main() {
    let res1 = Solution::two_sum(vec![2, 7, 11, 15], 9);
    let res2 = Solution::two_sum(vec![3, 2, 4], 6);
    let res3 = Solution::two_sum(vec![3, 3], 6);

    println!("res1 is: {:?}", res1);  // [0, 1]
    println!("res2 is: {:?}", res2);  // [1, 2]
    println!("res3 is: {:?}", res3);  // [0, 1]
}
