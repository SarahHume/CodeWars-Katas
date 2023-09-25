const getMultiples = require("../getMultiples");

describe("getMultiples", () => {

    test("should return a number", () =>  {
        expect(typeof getMultiples(0)).toBe("number")
    })

    test("should return 0 if passed a value of 3 or lower", () => {
        const actual1 = getMultiples(3);
        const actual2 = getMultiples(0);
        const actual3 = getMultiples(-5);
        expect(actual1).toBe(0);
        expect(actual2).toBe(0);
        expect(actual3).toBe(0);
    })

    test("should return at least 3 if passed a value greater than 3", () => {
        expect(getMultiples(4)).toBeGreaterThanOrEqual(3);
        expect(getMultiples(7)).toBeGreaterThanOrEqual(3);
    })

    test("should return sum of multiples of 3 or 5 if passed a value greater than 5", () => {
        expect(getMultiples(6)).toBe(8);
        expect(getMultiples(10)).toBe(23);
    })

    test("should not count a multiple of both 3 and 5 twice", () => {
        expect(getMultiples(16)).toBe(60);
        expect(getMultiples(31)).toBe(225);
    })
})