import React from 'react'
import CodeEditor from '../CodeEditor'
import { useGlobal } from '../store'
import { Box } from 'hybrid-components'
import { languageMapper } from '../constants'

export default () => {
    const [state] = useGlobal()
    // return <pre>{JSON.stringify(state, null, 4)}</pre>
    return <View />
}

const View = ({}) => {
    const [state, actions] = useGlobal()
    const language = state.settings.language
    if (state.fetchingOutput) {
        return (
            <Box height='100%' overflow='auto'>
                loading
            </Box>
        )
    }
    return (
        <Box height='100%' overflow='auto'>
            <CodeEditor
                theme='chrome'
                onChange={(code) => actions.setOutputCode(code)}
                value={state.outputEditor.code}
                language={languageMapper[language] || language}
                showGutter={false}
                minLines={2000}
                readOnly
            />
        </Box>
    )
}
