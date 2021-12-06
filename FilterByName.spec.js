function filterByName(inputArr, searchTerm) {
    return inputArr.filter(function(arrayElement) {
        return arrayElement.url.match(searchName);
    });
}

describe("filter function", () => {
    test("It should Filter by a serach name (uRl)", () => {
        const input = [
            { id: 4, url: "https://www.ukl1.dev" },
            { id: 5, url: "https://www.uRl1.dev" },
            { id: 6, url: "https://www.url1.dev" },
            { id: 7, url: "https://www.uTl1.dev" }
        ];
        const output = [{ id: 6, url: "https://www.url1.dev" }];
        expect(filterByName(input, "uRl")).toEqual(output);
    })
})