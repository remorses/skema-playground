import makeHook, { Store, Hook } from 'fuck-redux'

interface State {
    skemaEditor: {
        code: string
    }
    outputEditor: {
        code: string
    }
}

const actions = ({ setState, state }: Store<State>) => ({
    setSkemaCode: (code) => {
        setState({ skemaEditor: { ...state.skemaEditor, code } })
    }
})

const initialState = {
    skemaEditor: {
        code: 'ciao\ndsf'
    },
    outputEditor: {
        code: 'ciao\ndsf'
    }
}

export const useGlobal = makeHook<State, typeof actions>(
    initialState,
    actions
)
