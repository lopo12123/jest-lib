function canConstruct(ransomNote: string, magazine: string): boolean {
    const map = new Map<string, number>();
    for (let i = 0; i < magazine.length; i++) {
        map.set(magazine[i], (map.get(magazine[i]) || 0) + 1);
    }

    for (let i = 0; i < ransomNote.length; i++) {
        const v = (map.get(ransomNote[i]) ?? 0) - 1
        if(v < 0) return false
        map.set(ransomNote[i], v)
    }

    return true
}