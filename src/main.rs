fn main() {
    println!("res: {}", lk(&vec![10, 5, 2, 6], 100));
    println!("res: {}", lk(&vec![1, 2, 3, 4, 5], 8));
}

fn lk(nums: &Vec<i32>, k: i32) -> i32 {
    if k == 0 {
        return 0;
    }

    let mut count = 0;
    let mut prod = 1;
    let mut left = 0;

    let len = nums.len();
    let mut i = 0;
    while i < len {
        prod *= nums[i];

        while prod >= k && left <= i {
            if left == i {
                prod = 1;
                left = i + 1;
                break;
            }
            prod /= nums[left];
            left += 1;
        }

        if prod < k {
            count += i - left + 1
        }

        i += 1;
    }

    return count as i32;
}
