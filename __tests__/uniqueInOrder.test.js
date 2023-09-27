const uniqueInOrder = require("../uniqueInOrder");

describe("uniqueInOrder", () => {

    test("should return an array", () => {
        const string = "string";
        const array = ["1", "2", "3", "4", "5"];
        expect(Array.isArray(uniqueInOrder(string))).toBe(true);
        expect(Array.isArray(uniqueInOrder(array))).toBe(true);
    })

    test("should return list of all elements if passed an iterable with no repeated elements", () => {
        const string = "string";
        const strExpected = ["s", "t", "r", "i", "n", "g"];
        const array = ["1", "2", "3", "4", "5"];
        expect(uniqueInOrder(string)).toEqual(strExpected);
        expect(uniqueInOrder(array)).toEqual(array);
    })

    test("returned array should be unique", () => {
        const array = ["1", "2", "3", "4", "5"];
        expect(uniqueInOrder(array)).not.toBe(array);
    })

    test("should omit repeated elements", () => {
        const string = "sstriiIngG"
        const strExpected = ["s", "t", "r", "i", "I", "n", "g", "G"];
        const array = [1, 1, "1", 12, "A", "A", 2, 3, "A", "a"];
        const arrExpected = [1, "1", 12, "A", 2, 3, "A", "a"];
        expect(uniqueInOrder(string)).toEqual(strExpected)
        expect(uniqueInOrder(array)).toEqual(arrExpected);
    })

})