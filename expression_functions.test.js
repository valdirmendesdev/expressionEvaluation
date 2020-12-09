const { test, expect } = require("@jest/globals");
const { is_valid } = require("./expression_functions");

test('should be true when string is empty', () => {
    expect(is_valid("")).toBeTruthy()
})

test('should be true when characters order is correct', () => {
    expect(is_valid("()")).toBeTruthy()
})

test('should be false when open and close characters order is incorrect', () => {
    expect(is_valid(")(")).toBeFalsy()
})

test('should be false when there is a character without pair', () => {
    expect(is_valid("[(a)aa")).toBeFalsy()
})

test('should be true when there are some characters and all characters have a valid pair', () => {
    expect(is_valid("([{}])")).toBeTruthy()
    expect(is_valid("([{}])")).toBeTruthy()
    expect(is_valid("([{}{}({})])")).toBeTruthy()
})