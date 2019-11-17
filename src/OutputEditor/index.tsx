import React from 'react'
import CodeEditor from '../CodeEditor'
import { useGlobal } from '../store'
import { Box } from 'hybrid-components'

export default () => {
    return <View />
}

const View = ({}) => {
    const [state, actions] = useGlobal()

    return (
        <Box height='100%' overflow='auto'>
            <CodeEditor
                theme='xcode'
                onChange={(code) => actions.setOutputCode(code)}
                value={state.outputEditor.code}
                language='yaml'
                minLines={2000}
                readOnly
            />
        </Box>
    )
}
