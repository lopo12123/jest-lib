fn main() {
    println!("result: {:?}", lk("IDIIDDIDDDIIII"));
    println!("result: {:?}", lk("IIDIDIDI"));
    println!("result: {:?}", lk("IDIDIDDDDDIIDIIDD"));
    println!("result: {:?}", lk("DDIIIIIDIDDD"));
    println!("result: {:?}", lk("IDII"));
}

fn lk(s: &str) -> Vec<i32> {
    let s_len = s.len();

    let mut res: Vec<i32> = vec![];
    let mut d_count = 0;

    // 统计 D 的数量
    let mut i = 0;
    while i < s_len {
        if let "D" = &s[i..(i + 1)] {
            d_count += 1
        }

        i += 1;
    }

    res.push(d_count);

    let mut curr_i = d_count + 1;
    let mut curr_d = d_count - 1;

    i = 0;
    while i < s_len {
        if &s[i..(i + 1)] == "D" {
            res.push(curr_d);
            curr_d -= 1;
        } else {
            res.push(curr_i);
            curr_i += 1;
        }

        i += 1;
    }

    return res;
}
