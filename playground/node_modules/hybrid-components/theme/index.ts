import { Theme, boxShadow, } from 'styled-system'
import * as CSS from 'csstype'
import Color from 'color'

const space = [
    0, 4, 8, 16, 32, 64, 128, 256
]

const sizes = [
    0, 4, 8, 16, 32, 64, 128, 256, 500, 900
]

const colors = {
    primary: '#001EC4',
    globalBackground: '#EFF3FB',
    background: '#D7DCE6',
    text: '#4C5461',
    lightText: '#7A869A',
    white: '#FFFFFF',
}

const shadows: Theme['shadows'] = [
    '0px 2px 10px rgba(159,159,159,0.3)',
    '0px 2px 10px rgba(159,159,159,0.7)'
]


const fonts = {
    default: 'arial',
}

const fontSizes = [
    '12px',
    '14px',
    '16px',
    '24px',
    '42px',
]

const fontWeights = [
    300,
    400,
    500,
    600,
]


const radii = [
    '4px',
    '8px',
]

const text = {
    fontFamily: fonts.default,
    fontSize: fontSizes[2],
    fontWeight: fontWeights[1],
}

const variants = {
    text,
    h1: {
        ...text,
        fontSize: 4,
    },
    h2: {
        ...text,
        fontSize: 3,
    },
    link: {
        ...text,
        color: 'primary',
    },
    image: {},
    button: {
        ...text,
        borderRadius: radii[0],
        color: colors.white,
        bg: colors.primary,
    },
    card: {
        borderRadius: radii[1],
        backgroundColor: colors.background,
        boxShadow: shadows[0],
        marginTop: space[3],
        padding: space[3],
        width: '100%',
    } as CSS.Properties,
}

export default {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    space,
    shadows,
    sizes,
    variants,
    radii,
}
