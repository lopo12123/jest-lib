function numberOfBoomerangs(points: number[][]): number {
    /**
     * Calculate distance between 2 points
     */
    const distance = (a: number[], b: number[]) => {
        return Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2)
    }

    /**
     * Pick 2 from n
     */
    const Cn2 = (n: number) => {
        if(n < 2) return 0
        return n * (n - 1) / 2
    }

    let result = 0
    for (let i = 0; i < points.length; i++) {
        const fixed = points[i]
        const map = new Map<number, number>()
        for (let j = 0; j < points.length; j++) {
            // skip self
            if(i === j) continue

            // calculate distance
            const d = distance(fixed, points[j])
            map.set(d, (map.get(d) || 0) + 1)
        }

        // sum up
        for (const v of map.values()) {
            result += Cn2(v)
        }
    }

    // multiply by 2 (cause order matters)
    return result * 2
}