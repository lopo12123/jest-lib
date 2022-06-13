struct Solution {}

impl Solution {
    pub fn height_checker(heights: Vec<i32>) -> i32 {
        let in_order = &mut heights.clone();
        in_order.sort_unstable();
        let mut count = 0;

        let mut i = 0;
        while i < heights.len() {
            if heights[i] != in_order[i] {
                count += 1
            }
            i += 1;
        }
        count
    }
}

fn main() {
    let res1 = Solution::height_checker(vec![1, 1, 4, 2, 1, 3]);
    let res2 = Solution::height_checker(vec![5, 1, 2, 3, 4]);
    let res3 = Solution::height_checker(vec![1, 2, 3, 4, 5]);

    println!("res1 is: {:?}", res1);  // 3
    println!("res2 is: {:?}", res2);  // 5
    println!("res3 is: {:?}", res3);  // 0
}
