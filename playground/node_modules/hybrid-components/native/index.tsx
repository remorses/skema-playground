import React, { FC, ImgHTMLAttributes } from 'react'
import styled from 'styled-components/native'
import { box, text, variants } from '../src/styleProps'
import {
    BoxProps,
    TextProps,
    ButtonProps,
    ImageProps,
    ScrollViewProps,
    LinkProps,
    ThemedComponentProps
} from '../src/types'

export const Box: FC<BoxProps> = styled.View.attrs((props: BoxProps) => ({
    variants: props.variants || ['box']
}))`
    flex-direction: column;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    ${variants}
    ${box}
`
Box.displayName = 'Box'

export const Card: FC<BoxProps> = styled.View.attrs((props: BoxProps) => ({
    variants: props.variants || ['card']
}))`
    flex-direction: column;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    ${variants}
    ${box}
`
Card.displayName = 'Card'

export const Text: FC<TextProps> = styled.Text.attrs((props: TextProps) => ({
    variants: props.variants || ['text']
}))`
    flex-direction: column;
    width: 100%;
    margin: 0;
    padding: 0;
    ${variants}
    ${text}
`
Text.displayName = 'Text'

export const Button: FC<ButtonProps> = styled.Button.attrs(
    (props: ButtonProps & any) => ({
        title: props.children,
        variants: props.variants || ['button'],
    })
)`
    width: auto;
    padding: 4px 8px;
    font-size: inherit;
    line-height: inherit;
    ${variants}
    ${box}
`
Button.displayName = 'Button'

export const Image: FC<ImageProps & ImgHTMLAttributes<any>> = styled.Image.attrs((props: ImageProps) => ({
    src: props.source,
    variants: props.variants || ['image']
}))`
    ${variants}
    ${box}
`
Image.displayName = 'Image'

export const ScrollView: FC<ScrollViewProps> = styled.ScrollView.attrs(
    (props: ScrollViewProps) => ({
        variants: props.variants || ['scrollview']
    })
)`
    width: 100%;
    height: auto;
    ${variants}
    ${box}
`
ScrollView.displayName = 'ScrollView'

export const Hidden: FC<BoxProps> = styled.View`
    visibility: hidden;
    width: auto;
    height: auto;
    margin: 0;
    padding: 0;
    ${box}
`
Hidden.displayName = 'Hidden'

export const Link: FC<LinkProps> = styled.Button.attrs((props: LinkProps) => ({
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
