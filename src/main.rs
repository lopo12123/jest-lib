fn main() {
    // println!("find: {:#?}", lk(vec![3,3], 6));
    println!("{}", lk(123321));
}

fn lk(nums: i32) -> bool {
    let str: String = nums.to_string();
    let l: usize = str.len();
    let mut i: usize = 0;
    while i < (l / 2) {
        if str[i..(i + 1)] != str[(l - 1 - i)..(l - i)] {
            return false;
        }
        i += 1;
    }

    return true;
}
