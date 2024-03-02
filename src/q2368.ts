function reachableNodes(n: number, edges: number[][], restricted: number[]): number {
    const stops = new Set(restricted)
    const tree: number[][] = new Array(n).fill(null).map(_ => [])
    edges.forEach(([ x, y ]) => {
        tree[x].push(y)
        tree[y].push(x)
    })

    let count = 0
    const dfs = (val: number, from: number) => {
        count += 1;
        tree[val].forEach(to => {
            if(!stops.has(to) && to !== from) dfs(to, val)
        })
    }
    dfs(0, -1)

    return count
}