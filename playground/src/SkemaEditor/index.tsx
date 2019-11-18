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
                onChange={(code) => actions.setSkemaCode(code)}
                value={state.skemaEditor.code}
                language='yaml'
                minLines={2000}
            />
        </Box>
    )
}
