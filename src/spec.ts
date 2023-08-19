import * as Exports from ".";

describe("Exports", () => {
    it("exports the HashMap class", () => {
        const map = new Exports.HashMap<string, number>();
        map.set("foo", 1);
        expect(map.get("foo")).toEqual(1);
    });
});
