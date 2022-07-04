struct Solution {}

impl Solution {
    pub fn minimum_abs_difference(arr: Vec<i32>) -> Vec<Vec<i32>> {
        let mut arr = arr.clone();
        arr.sort_unstable();

        let mut result: Vec<Vec<i32>> = vec![];
        let mut min_abs = arr[1] - arr[0];
        let mut p = 1;
        while p < arr.len() {
            match (arr[p] - arr[p - 1]).cmp(&min_abs) {
                std::cmp::Ordering::Less => {
                    result = vec![vec![arr[p - 1], arr[p]]];
                    min_abs = arr[p] - arr[p - 1];
                }
                std::cmp::Ordering::Equal => {
                    result.push(vec![arr[p - 1], arr[p]]);
                }
                std::cmp::Ordering::Greater => ()
            }
            p += 1;
        }

        result
    }
}


fn main() {
    let nums1 = vec![4, 3, 1, 2];  // [[1,2], [2,3], [3,4]]
    let nums2 = vec![1, 3, 6, 10, 15];  // [[1,3]]
    let nums3 = vec![3, 8, -10, 23, 19, -4, -14, 27];  // [[-14,-10],[19,23],[23,27]]

    println!("{:?}", Solution::minimum_abs_difference(nums1));
    println!("{:?}", Solution::minimum_abs_difference(nums2));
    println!("{:?}", Solution::minimum_abs_difference(nums3));
}
