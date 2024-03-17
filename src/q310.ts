function findMinHeightTrees(n: number, edges: number[][]): number[] {
    if(n == 1) return [ 0 ]

    const links: { [k: number | string]: Set<number> } = {}

    for (let [ a, b ] of edges) {
        if(!links[a]) links[a] = new Set<number>([ b ])
        else links[a].add(b)

        if(!links[b]) links[b] = new Set<number>([ a ])
        else links[b].add(a)
    }

    let count = 0
    while (true) {
        const nodes = Object.keys(links)
        if(nodes.length <= 2) return nodes.map(v => parseInt(v))

        // 需要保证所有叶子节点一次性删除, 此处记录 links[k].delete(v)
        const delete_concurrent: [ k: number, v: number ][] = []

        // 标识叶子节点
        for (let node of nodes) {
            // 与当前节点相连的节点
            const link2me = links[node]

            // 叶子节点 -- 删掉
            if(link2me.size === 1) {
                for (let other of link2me) {
                    delete_concurrent.push([ other, parseInt(node) ])
                }
                // 可以直接删掉自身，但不能删掉别人对自身的指向
                delete links[node]
            }
        }
        for (let [ k, v ] of delete_concurrent) {
            links[k].delete(v)
        }
        count += 1
    }
}

console.time('xx')
console.log(findMinHeightTrees(6, [ [ 0, 1 ], [ 0, 2 ], [ 0, 3 ], [ 3, 4 ], [ 4, 5 ] ]))
console.timeEnd('xx')