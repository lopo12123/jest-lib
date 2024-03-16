function maxMoves(grid: number[][]): number {
    const row = grid.length
    const col = grid[0].length

    let states: boolean[] = new Array(row).fill(true)

    const canIArrive = (r: number, c: number): boolean => {
        const v = grid[r][c]
        const v1 = grid[r - 1]?.[c - 1] ?? Infinity
        const v2 = grid[r][c - 1]
        const v3 = grid[r + 1]?.[c - 1] ?? Infinity

        return (v > v1 && states[r - 1]) || (v > v2 && states[r]) || (v > v3 && states[r + 1])
    }

    for (let c = 1; c < grid[0].length; c++) {
        let can_pass = false;
        const new_states = []
        for (let r = 0; r < grid.length; r++) {
            const state_r = canIArrive(r, c)
            new_states.push(state_r)
            if(state_r) can_pass = true
        }
        if(!can_pass) return c - 1

        states = new_states
    }

    return col - 1
}