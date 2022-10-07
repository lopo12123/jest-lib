use std::ops::Add;

struct Solution {}

impl Solution {
    pub fn max_ascending_sum(nums: Vec<i32>) -> i32 {
        if nums.len() == 1 { return nums[0]; }

        let mut max_sum = 0;
        let mut curr_sum = nums[0];

        nums.iter().reduce(|prev, curr| {
            if prev < curr {
                curr_sum += curr;
            } else {
                max_sum = std::cmp::max(max_sum, curr_sum);
                curr_sum = *curr;
            }

            curr
        });

        std::cmp::max(max_sum, curr_sum)
    }
}


fn main() {}
