import React from 'react'
import { Row, Box, Text } from 'hybrid-components'
import { Eye, EyeOff } from 'styled-icons/feather'
import { ShowAlt, Coffee } from 'styled-icons/boxicons-regular/'
import { Hide } from 'styled-icons/boxicons-regular/'
import { useGlobal } from '../store'
import { BUYMECOFFEE } from '../constants'

const DisplaySettingsBtn = ({}) => {
    const [state, actions] = useGlobal()

    return (
        <Box width='60px' alignItems='center' justifyContent='center'>
            <div onClick={actions.toggleShowSettings}>
                {!state.showSettings ? (
                    <ShowAlt width='30px' />
                ) : (
                    <Hide width='30px' />
                )}
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
            background='#2D2D2D'
            // borderBottom='2px solid #ddd'
            justifyContent='space-between'
            alignItems='center'
            style={{ color: 'white', fontSize: '16px' }}
        >
            <Box width='auto'>
                <Text fontSize='24px' fontWeight='normal'>
                    Skema Playground
                </Text>
            </Box>
            <Row width='auto'>
                <a
                    href={BUYMECOFFEE}
                    target='_blank'
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    <Row height='40px' alignItems='center' mx='20px'>
                        <div
                            style={{
                                whiteSpace: 'nowrap',
                                marginRight: '20px'
                            }}
                        >
                            Buy me a coffee
                        </div>
                        <Coffee width='30px' />
                    </Row>
                </a>
                <Row height='40px' alignItems='center' mx='20px'>
                    Options
                    <DisplaySettingsBtn />
                </Row>
            </Row>
        </Row>
    )
}
