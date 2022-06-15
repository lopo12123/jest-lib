struct Solution {}

impl Solution {
    pub fn find_diagonal_order(mat: Vec<Vec<i32>>) -> Vec<i32> {
        let row = mat.len();
        let col = mat[0].len();

        return if row == 1 {
            mat[0].clone()
        } else if col == 1 {
            let mut res = vec![];
            for item in mat.iter() {
                res.push(item[0])
            }
            res
        } else {
            let max = std::cmp::max(row, col) * 2;
            let mut store = vec![];

            let mut xy = 0;
            while xy <= max {
                let mut offset = 0;
                while offset <= xy {
                    if xy % 2 == 0 && xy - offset < row && offset < col
                        || xy % 2 != 0 && xy - offset < col && offset < row {
                        store.push(
                            if xy % 2 == 0 {
                                mat[xy - offset][offset]
                            } else {
                                mat[offset][xy - offset]
                            }
                        );
                    }
                    offset += 1;
                }
                xy += 1;
            }

            store
        }
    }
}


fn main() {
    let a = Solution::find_diagonal_order(vec![
        vec![1, 3],
        vec![2, 4],
        vec![5, 7],
        vec![6, 8],
    ]);

    println!("{:?}", a);
}
