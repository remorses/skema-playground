import React, { FC, ImgHTMLAttributes } from 'react'
import styled, { ThemedStyledProps } from 'styled-components'
import { box, text, variants } from './styleProps'
import {
    BoxProps,
    TextProps,
    ButtonProps,
    ImageProps,
    ScrollViewProps,
    LinkProps,
    ThemedComponentProps
} from './types'

export const Box: FC<BoxProps> = styled.div.attrs((props: BoxProps) => ({
    variants: props.variants || ['box']
}))`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    ${variants}
    ${box}
`
Box.displayName = 'Box'

export const Card: FC<BoxProps> = styled.div.attrs((props: BoxProps) => ({
    variants: props.variants || ['card']
}))`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    ${variants}
    ${box}
`
Card.displayName = 'Card'

export const Text: FC<TextProps> = styled.div.attrs((props: TextProps) => ({
    variants: props.variants || ['text']
}))`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    ${variants}
    ${text}
`
Text.displayName = 'Text'

export const Button: FC<ButtonProps> = styled.button.attrs(
    (props: ButtonProps) => ({
        onClick: props.onPress,
        variants: props.variants || ['button'],
        onPress: undefined
    })
)`
    width: auto;
    padding: 4px 8px;
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    line-height: inherit;
    text-decoration: none;
    :active {
        opacity: 0.2;
    }
    ${variants}
    ${box}
`
Button.displayName = 'Button'

export const Image: FC<ImageProps & ImgHTMLAttributes<any>> = styled.img.attrs((props: ImageProps) => ({
    src: props.source,
    variants: props.variants || ['image']
}))`
    ${variants}
    ${box}
`
Image.displayName = 'Image'

export const ScrollView: FC<ScrollViewProps> = styled.div.attrs(
    (props: ScrollViewProps) => ({
        variants: props.variants || ['scrollview']
    })
)`
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100%;
    height: auto;
    ${({ noScrollbar }: any) =>
        noScrollbar
            ? `
            &::-webkit-scrollbar {
                width: 0px;
                background: transparent; /* Chrome/Safari/Webkit */
            }
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none;  /* IE 10+ */
            `
            : ''}
    ${variants}
    ${box}
`
ScrollView.displayName = 'ScrollView'

export const Hidden: FC<BoxProps> = styled.div`
    visibility: hidden;
    display: inline-block;
    width: auto;
    height: auto;
    margin: 0;
    padding: 0;
    ${box}
`
Hidden.displayName = 'Hidden'

export const Link: FC<LinkProps> = styled.a.attrs((props: LinkProps) => ({
    variants: props.variants || ['link']
}))`
    ${variants}
    ${text}
`
Link.displayName = 'Link'

export const H1: FC<TextProps> = (props) => (
    <Text variants={['h1']} {...props} />
)
H1.displayName = 'H1'

export const H2: FC<TextProps> = (props) => (
    <Text variants={['h2']} {...props} />
)
H2.displayName = 'H2'

export const Row: FC<BoxProps> = (props) => (
    <Box flexDirection='row' {...props} />
)
Row.displayName = 'Row'

export const Column = Box
