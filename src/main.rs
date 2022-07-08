struct Solution {}

impl Solution {
    pub fn min_cost_to_move_chips(position: Vec<i32>) -> i32 {
        let mut odd_even = [0, 0];

        for po in position {
            odd_even[(po % 2) as usize] += 1;
        }

        std::cmp::min(odd_even[0], odd_even[1])
    }
}


fn main() {
    let nums1 = vec![1, 2, 3];  // 1
    let nums2 = vec![2, 2, 2, 3, 3];  // 2
    let nums3 = vec![1, 100000];  // 1

    println!("{:?}", Solution::min_cost_to_move_chips(nums1));
    println!("{:?}", Solution::min_cost_to_move_chips(nums2));
    println!("{:?}", Solution::min_cost_to_move_chips(nums3));
}
