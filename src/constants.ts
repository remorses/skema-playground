

export const theme = {}



export const LOCAL_STORAGE_JWT_TOKEN_KEY = 'token'

export const GRAPHQL_PRODUCTION_ENDPOINT = ''
export const GRAPHQL_MOCKING_ENDPOINT = 'http://localhost:9000'
export const GRAPHQL_TESTING_ENDPOINT = 'http://localhost:8000/graphql'
export const mocking = Boolean(process.env.MOCKING)
export const OUTPUT_LANGUAGES = ['typescript', 'python', 'graphql', 'jsonschema']

export const languageMapper = {
    jsonschema: 'json',
    skema: 'yaml',
    graphql: 'graphqlschema',
}