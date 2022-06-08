struct Solution {}

impl Solution {
    pub fn is_boomerang(points: Vec<Vec<i32>>) -> bool {
        if points[0][0] == points[1][0] && points[0][1] == points[1][1]
            || points[0][0] == points[2][0] && points[0][1] == points[2][1]
            || points[1][0] == points[2][0] && points[1][1] == points[2][1]
            || points[0][0] == points[1][0] && points[0][0] == points[2][0]
            || points[0][1] == points[1][1] && points[0][1] == points[2][1]
        {
            false
        } else {
            (points[0][1] - points[1][1]) * (points[0][0] - points[2][0])
                != (points[0][1] - points[2][1]) * (points[0][0] - points[1][0])
        }
    }
}

fn main() {
    let res = Solution::is_boomerang(vec![vec![1, 2], vec![1, 3], vec![2, 2]]);

    println!("res is: {:?}", res);
}
