const faker = require("faker")

const sleep = (t) => new Promise((res) => setTimeout(res, t))

module.exports = {
    ObjectId: () => faker.random.uuid(),
    Language: () => ({
        optionsSchema: schema
    })
}


schema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Options",
    "description": "",
    "type": "object",
    "properties": {
        "resolve": {
            "type": "boolean",
            "description": "resolve refs"
        },
        "ref": {
            "type": "string",
            "description": "Reference to resolve or make root"
        },
        "language": {
            "enum": [
                "python",
                "js"
            ],
            "description": "choose lang"
        },
        "another_obj": {
            "type": "object",
            "properties": {
                "x": {
                    "type": "number",
                    "multipleOf": 1.0,
                    "description": "x coordinate"
                }
            },
            "additionalProperties": false,
            "required": [
                "x"
            ],
            "description": ""
        }
    },
    "additionalProperties": false,
    "required": [
        "resolve",
        "ref",
        "language",
        "another_obj"
    ]
}
