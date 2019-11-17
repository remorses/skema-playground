import React, { Component } from 'react'
import brace from 'brace'
import AceEditor from 'react-ace'
import { Box, Row } from 'hybrid-components'
import 'brace/theme/xcode'
import 'brace/theme/tomorrow_night'
import 'brace/theme/tomorrow'
import 'brace/ext/language_tools'
import 'brace/mode/json'
import 'brace/mode/yaml'
import { BoxProps } from 'hybrid-components/src/types'

export default ({
    value,
    language = 'yaml',
    readOnly = false,
    minLines = 0,
    theme = 'tomorrow_night',
    onChange = (v) => null,
    ...rest
}) => {
    return (
        <Box
            overflow='scroll'
            height='100%'
            
            // borderRadius='10px'
            p={0}
            {...rest}
        >
            <AceEditor
                
                // ref={key}
                readOnly={readOnly}
                mode={language}
                fontSize={14}
                theme={theme}
                // name={key}
                height='100%'
                editorProps={{ $blockScrolling: true,  }}
                value={value}
                width={'100%'}
                // maxLines={300}
                highlightActiveLine={!readOnly}
                // minLines={minLines}
                onChange={onChange as any}
                setOptions={{
                    highlightGutterLine: true,
                    wrapBehavioursEnabled: false,
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    showLineNumbers: true,
                    showFoldWidgets: false,
                    tabSize: 4,
                    showInvisibles: false,
                    showGutter: true,
                    
                    spellcheck: true,
                }}
            />
        </Box>
    )
}
