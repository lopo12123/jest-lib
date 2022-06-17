struct Solution {}

impl Solution {
    pub fn duplicate_zeros(arr: &mut Vec<i32>) {
        let pool: Vec<i32> = arr.clone();

        let mut p = 0;
        let mut t = 0;
        while p < arr.len() {
            if pool[t] == 0 {
                arr[p] = 0;
                p += 1;

                if p < arr.len() {
                    arr[p] = 0;
                    p += 1;
                }
            } else {
                arr[p] = pool[t];
                p += 1;
            }
            t += 1;
        }
    }
}


fn main() {
    let mut arr = vec![1, 0, 2, 0, 3];

    Solution::duplicate_zeros(&mut arr);

    println!("{:?}", arr);
}
