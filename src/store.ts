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
}

const actions = ({ setState, state }: Store<State>) => ({
    setSkemaCode: (code) => {
        setState({ skemaEditor: { ...state.skemaEditor, code } })
    },
    setOutputCode: (code) => {
        setState({ outputEditor: { ...state.skemaEditor, code } })
    },
    setOutputLanguage: (language) => {
        setState({ settings: { language, options: {} } })
    },
    setOptions: options => {
        setState({ settings: { ...state.settings, options } })
    }
})

const initialState = {
    skemaEditor: {
        code: 'ciao\ndsf'
    },
    outputEditor: {
        code: 'ciao\ndsf'
    },
    settings: {
        options: {}
    }
}

export const useGlobal = makeHook<State, typeof actions>(initialState, actions)
