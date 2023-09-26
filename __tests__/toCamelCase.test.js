const toCamelCase = require("../toCamelCase");

describe("toCamelCase", () => {

    test("should return an empty string if passed an empty string", () => {
        expect(toCamelCase("")).toBe("");
    })

    test("should return the same string if passed a non-empty string with no underscores or dashes", () => {
        expect(toCamelCase("string")).toBe("string");
    })

    test("should return a different string if passed a non-empty string with underscores or dashes", () => {
        expect(toCamelCase("not-this")).not.toBe("not-this");
    })

    test("should convert a passed string into camel case", () => {
        expect(toCamelCase("this-is-right")).toBe("thisIsRight");
        expect(toCamelCase("This_is_Right-too")).toBe("ThisIsRightToo");
    })

})