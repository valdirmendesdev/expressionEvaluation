const { is_valid } = require('./expression_functions')

function check_expression_is_valid(expression, expected_result) {
  console.log(`Expression: ${expression}   
                  Expected result: ${expected_result}   
                  Returned result: ${is_valid(expression)}`)
}

check_expression_is_valid("", true)
check_expression_is_valid("()", true)
check_expression_is_valid(")(", false)
check_expression_is_valid("[(a)aa", false)
check_expression_is_valid("([{}{}({})])", true)