//Cesar.Cedano@bairesdev.com

const evaluated_characters_pairs =
    [
        {
            open: "(",
            close: ")"
        }, {
            open: "[",
            close: "]"
        }, {
            open: "{",
            close: "}"
        },
    ]
const open_characters = get_values_by_an_object_property_name(evaluated_characters_pairs, "open")
const close_characters = get_values_by_an_object_property_name(evaluated_characters_pairs, "close")
const all_evaluated_characters = [...open_characters, ...close_characters]

function get_values_by_an_object_property_name(array, property_name) {
    return Array.from(array).reduce((values, object) => values.concat(object[property_name]), "")
}

exports.is_valid = expression => {

    const expression_characters = Array.from(expression).filter(character => all_evaluated_characters.includes(character))
    const open_characters_stack = []
    for (const character_evaluated of expression_characters) {
        if (open_characters.includes(character_evaluated)) {
            open_characters_stack.push(character_evaluated)
        }
        else {
            const element_character_pair = evaluated_characters_pairs.find(item => item.close === character_evaluated);
            const last_open_character = open_characters_stack[open_characters_stack.length - 1]
            if (element_character_pair.open !== last_open_character) {
                return false
            }
            open_characters_stack.pop()
        }
    }

    return open_characters_stack.length > 0 ? false : true;

}