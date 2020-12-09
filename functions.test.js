const { test, expect } = require("@jest/globals");
const { describe } = require("yargs");
const { expressionIsValid } = require("./functions");

test('should be true when string is empty', () => {
    expect(expressionIsValid("")).toBeTruthy()
})

test('should be true when order is correct', () => {
    expect(expressionIsValid("()")).toBeTruthy()
})

test('should be false when order is incorrect', () => {
    expect(expressionIsValid(")(")).toBeFalsy()
})

test('should be false when there is a incorrect character', () => {
    expect(expressionIsValid("(a)aa)")).toBeFalsy()
})

test('should be true when there are all characters and order is correct', () => {
    expect(expressionIsValid("([{}])")).toBeTruthy()
})
