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
    }
    fetchingOutput: boolean,
    showSettings: boolean,
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
        code: ''
    },
    settings: {
        options: {}
    },
    fetchingOutput: false,
    showSettings: true,
}

const actions = (store: Store<State>) => {
    return {
        setSkemaCode: (code) => {
            store.setState({ skemaEditor: { ...store.state.skemaEditor, code } })
        },
        setOutputCode: (getCode) => {
            store.setState({ fetchingOutput: true })
            getCode.then((code) => {
                store.setState({ outputEditor: { ...store.state.skemaEditor, code } })
                store.setState({ fetchingOutput: false })
            })
        },
        setOutputLanguage: (language) => {
            store.setState({
                settings: { language, options: {} },
                outputEditor: { code: '' }
            })
        },
        setOptions: (options) => {
            console.log(store.state)
            store.setState({ settings: { ...store.state.settings, options } })
        },
        toggleShowSettings: () => {
            store.setState({showSettings: !store.state.showSettings})
        }
    }
}

export const useGlobal = makeHook<State, typeof actions>(initialState, actions)
