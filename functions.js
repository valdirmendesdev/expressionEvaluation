

exports.expressionIsValid = expression => {

    const openEvaluatedCharacters = ["(","[","{"]
    const closeEvaluatedCharacters = [")", "]", "}"]
    const evaluatedCharacters = [...openEvaluatedCharacters, ...closeEvaluatedCharacters]
    const expressionCharacters = Array.from(expression).filter(character => evaluatedCharacters.includes(character))
    

    return !parenthesis.length &&
        !brackets.length &&
        !braces.length ? true : false;
}