import React from 'react'
import { Row, Box } from 'hybrid-components'
import { Eye, EyeOff } from 'styled-icons/feather'
import { useGlobal } from '../store'

const DisplaySettingsBtn = ({}) => {
    const [state, actions] = useGlobal()

    return (
        <Box width='60px' alignItems='center' justifyContent='center'>
            <div onClick={actions.toggleShowSettings}>
                {!state.showSettings ? <Eye width='30px' /> : <EyeOff width='30px'/>}
            </div>
        </Box>
    )
}

export default ({}) => {
    return (
        <Row
            px='40px'
            width='100%'
            height='50px'
            background='#fff'
            borderBottom='2px solid #ddd'
            justifyContent='space-between'
            alignItems='center'
        >
            <Box width='auto'>Logo</Box>
            <Box width='auto'>
                <Row  height='40px' alignItems='center'>
                    Options
                    <DisplaySettingsBtn />
                </Row>
            </Box>
        </Row>
    )
}
