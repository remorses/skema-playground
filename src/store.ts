import makeHook, { Store, Hook } from 'fuck-redux'

interface State {
    skemaEditor: {
        code: string
    }
    outputEditor: {
        code: string
    }
    settings: {
        language?: string
        options: any
    },
    fetchingOutput: boolean
}

const skemaCode = `
Object:
    x: Int
    name: Str
    enum: "jkg" | "kghj"
    nested:
        cosa: Str

scalar: Int
`

const initialState = {
    skemaEditor: {
        code: skemaCode
    },
    outputEditor: {
        code: 'ciao\ndsf'
    },
    settings: {
        options: {}
    },
    fetchingOutput: false
}

const actions = ({ setState, state }: Store<State>) => ({
    setSkemaCode: (code) => {
        setState({ skemaEditor: { ...state.skemaEditor, code } })
    },
    setOutputCode: (code) => {
        setState({ outputEditor: { ...state.skemaEditor, code } })
    },
    setOutputLanguage: (language) => {
        setState({ settings: { language, options: {} }, outputEditor: {code: ''} })
    },
    setOptions: options => {
        setState({ settings: { ...state.settings, options } })
    },
})




export const useGlobal = makeHook<State, typeof actions>(initialState, actions)

