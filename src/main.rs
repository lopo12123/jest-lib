fn main() {
    // println!("find: {:#?}", lk(vec![3,3], 6));
    let aa = lk(vec![1, 2, 3]);

    println!("{:#?}", aa);
}

fn lk(nums: Vec<i32>) -> Vec<i32> {
    let mut res = nums.clone();

    let mut l = 0;
    let mut r = res.len() - 1;

    while l < r {
        if res[l] % 2 == 1 && res[r] % 2 == 0 {
            let temp = res[r];
            res[r] = res[l];
            res[l] = temp;
            l += 1;
            r -= 1;
        }
        else {
            if res[l] % 2 == 0 {
                l += 1;
            };
            if res[r] % 2 == 1 {
                r -= 1;
            }
        }
    }

    return res;
}
