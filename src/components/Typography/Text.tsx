import React, { CSSProperties } from 'react'
import { Typography } from 'antd'
import { TextProps } from 'antd/lib/typography/Text'

const { Text: CurText } = Typography 
const mapColor = {
    main: '#d4a373',
    white: 'white',
    black: 'black',
    lightGray: 'F3E9E0',
    midGray: 'B08968',
    darkGray: '71492E'
}
const mapFontFamily = {
    bold: 'Josefin Sans',
    regular: 'Josefin Sans',
}

interface IText extends TextProps {
    className?: string
    size?: number
    color?: 'white' | 'black' | 'lightGray' | 'midGray' | 'darkGray' | 'main'
    style?: CSSProperties
    bold?: boolean
    fontFamily?: 'bold' | 'regular'
}

const Text = (props: IText) => {

const { className, size = 16, color = 'black', style, bold, fontFamily = 'regular', ...cProps } = props
const weight = bold ? 'bold' : 'regular'

  return (
    <CurText style={{
        fontFamily: mapFontFamily[fontFamily],
        color: mapColor[color] || color,
        fontSize: size,
        fontWeight: weight,
        ...style
    }} {...cProps} />
  )
}

export default Text