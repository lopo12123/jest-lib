struct Solution {}

impl Solution {
    pub fn find_diagonal_order(mat: Vec<Vec<i32>>) -> Vec<i32> {
        let row = mat.len();
        let col = mat[0].len();

        if row == 1 {
            return mat[0].clone();
        } else if col == 1 {
            let mut res = vec![];
            for item in mat.iter() {
                res.push(item[0])
            }
            return res;
        } else {
            let mut res = vec![];
            let mut itered = 0;

            let mut y = 0;
            let mut x = 0;

            while itered < row * col {
                itered += 1;

                match (y, x) {
                    (y, x) if x => {}
                    _ => {}
                }
            }

            return res;
        }
    }
}


fn main() {
    // let a = Solution::find_diagonal_order(vec![
    //     vec![1, 3],
    //     vec![2, 4],
    //     vec![5, 7],
    //     vec![6, 8],
    // ]);
    //
    // println!("{:?}", a);
}
