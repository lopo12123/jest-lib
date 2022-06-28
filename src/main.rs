struct Solution {}

impl Solution {
    pub fn wiggle_sort(nums: &mut Vec<i32>) {
        let len = nums.len();

        nums.sort_unstable_by(|a, b| b.cmp(a));

        let mut low = vec![];
        let mut high = vec![];

        let mut i = 0;
        while i < len {
            if i < len / 2 {
                high.push(nums[i])
            } else {
                low.push(nums[i])
            }
            i += 1;
        }

        let mut p = 0;
        while p < high.len() {
            nums[p * 2] = low[p];
            nums[p * 2 + 1] = high[p];

            p += 1;
        }

        if len % 2 == 1 {
            nums[len - 1] = low[(len - 1) / 2];
        }

        // println!("low: {:?}, \nhigh: {:?}", low, high);
    }
}


fn main() {
    let mut nums1 = vec![1,1,1,1,2,2,2,2];
    Solution::wiggle_sort(&mut nums1);
    println!("{:?}", nums1);
}
