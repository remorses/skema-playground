import {
    SpaceProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    ShadowProps,
    FlexProps,
    BorderProps,
    OverflowProps,
    BackgroundProps,
    TypographyProps,
    BackgroundColorProps
} from 'styled-system'
import { CSSProperties, StyledInterface } from 'styled-components'

export type ThemedCSS = BoxProps & TextProps & CSSProperties & any

export type ThemedComponentProps = {
    // css?: ThemedCSS
    variants?: string | string[]
    ref?: any
    as?: any,
    style?: any
}

export type BoxProps = ThemedComponentProps &
    LayoutProps &
    SpaceProps &
    BorderProps &
    ShadowProps &
    OverflowProps &
    FlexboxProps &
    BackgroundProps &
    BackgroundColorProps

export type TextProps = ThemedComponentProps &
    LayoutProps &
    SpaceProps &
    TypographyProps &
    OverflowProps &
    ColorProps


export type ImageProps = {
    source: any
} & BoxProps

export type ButtonProps = {
    onPress?: Function,
} & BoxProps
export type ScrollViewProps = {
    noScrollBar?: boolean,
} & BoxProps
export type LinkProps = {
    href?: string,
} & TextProps