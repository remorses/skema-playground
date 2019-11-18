import { TouchableOpacityProps } from 'react-native'
// import styled from '@emotion/native';

import defaultTheme from '../theme'
import React, { FC, forwardRef } from 'react'
import {
    compose,
    space,
    color,
    flexbox,
    layout,
    shadow,
    border,
    background,
    typography,
} from 'styled-system'

import css, { get } from '@styled-system/css'
// import shouldForwardProp from '@styled-system/should-forward-prop';

const sx = (props) => css(props.sx)(props.theme)
const base = (props) => css(props.__css)(props.theme)
export const variants = ({ theme, variants, }) => {
    if (!theme || !Object.keys(theme).length) {
        theme = defaultTheme
    }
    if (!Array.isArray(variants)) {
        variants = [variants]
    }
    const styles = (theme.variants || {})
    let style = {}
    for (const variant of variants) {
        const newStyle = (styles[variant] || defaultTheme[variant]) || {}
        style = {
            ...style,
            ...newStyle
        }
    }
    return css(style)(theme)
}

export const box = compose(
  space,
  layout,
  // typography,
  flexbox,
  background,
  color,
  border,
  shadow,
)

export const text = compose(
  space,
  layout,
  typography,
  color,
  // border
)

