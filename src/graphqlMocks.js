const faker = require("faker")

const sleep = (t) => new Promise((res) => setTimeout(res, t))

module.exports = {
    Language: () => ({
        optionsSchema: schema
    }),
    Mutation: () => ({
        getOutput: async () => {
            // console.log('called')
            await sleep(400)
            return {code: code.toString()}
        }
    })
}


const code = `
interface Obj {
    x: int
    y: string
    o: xxx
}

interface xxx {
    x: int
    y: string
}


`

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
