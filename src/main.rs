fn main() {
    println!("find: {:#?}", lk(vec![3,3], 6));
}

fn lk(nums: Vec<i32>, target: i32) -> Vec<i32> {
    use std::collections::HashMap;
    use std::convert::TryInto;

    fn usize_to_i32(val: impl TryInto<i32>) -> i32 {
        let val = match val.try_into() {
            Ok(v) => v,
            Err(_) => panic!("can not do trans"),
        };
        return val;
    }

    // value: index
    let mut visited: HashMap<i32, i32> = HashMap::new();

    let len = nums.len();
    let mut i = 0;
    while i < len {
        if visited.contains_key(&(target - nums[i])) {
            return vec![*visited.get(&(target - nums[i])).unwrap(), usize_to_i32(i)];
        } else {
            visited.insert(nums[i], usize_to_i32(i));
        }

        i += 1;
    }

    return vec![0, 0];
}
