function sortPeople(names: string[], heights: number[]): string[] {
    const people = names.map((name, index) => ({
        name,
        height: heights[index]
    }))
    people.sort((a, b) => b.height - a.height)
    return people.map((person) => person.name)
};