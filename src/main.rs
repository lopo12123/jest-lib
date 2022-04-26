pub fn projection_area(grid: Vec<Vec<i32>>) -> i32 {
    let mut up = 0;
    let mut front = 0;

    let mut column_y = Vec::new();

    let mut x = 0;
    while x < grid.len() {
        let mut column_x = 0;

        let mut y = 0;
        while y < grid[x].len() {
            if grid[x][y] > 0 {
                // 俯视图 +1
                up += 1;
            }
            column_x = std::cmp::max(column_x, grid[x][y]);
            // x 为零的时候vec[y]为空 - 要先push
            if x == 0 {
                column_y.push(grid[x][y]);
            } else {
                column_y[y] = std::cmp::max(column_y[y], grid[x][y]);
            }

            y += 1;
        }
        // 主视图 +1
        front += column_x;

        x += 1;
    }

    let mut left = 0;

    let mut i = 0;
    while i < column_y.len() {
        // 累加左视图
        left += column_y[i];

        i += 1;
    }

    // println!("up {}, left {}, front {}", up, left, front);

    left + up + front
}
fn main() {
    let sum1 = projection_area(vec![vec![1, 2], vec![3, 4]]);  // 17
    let sum2 = projection_area(vec![vec![2]]);  // 5
    let sum3 = projection_area(vec![vec![1, 0], vec![0, 2]]);  // 8

    println!("sum1 :{}, sum2: {}, sum3: {}", sum1, sum2, sum3);
}
