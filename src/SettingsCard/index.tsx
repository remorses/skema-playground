import React, { useState, useEffect } from 'react'
import {
    Button,
    Card,
    Classes,
    Elevation,
    H5,
    Label,
    Slider,
    Switch,
    HTMLSelect,
    FormGroup
} from '@blueprintjs/core'
import { Box } from 'hybrid-components'
import { CSSProperties } from 'styled-components'
import { OUTPUT_LANGUAGES } from '../constants'
import { SchemaForm, SchemaFormState } from 'skema-form'
import {
    useGetLanguagesQuery,
    GetLanguagesQueryResult,
    GetLanguagesQuery,
    useGetOutputCodeMutation,
    LanguageName
} from '../generated'
import { useGlobal } from '../store'

export default ({}) => {
    const { data, loading, error } = useGetLanguagesQuery()
    if (loading) {
        return <>loading</>
    }

    return <View data={data} />
}

const View = ({ data }: { data: GetLanguagesQuery }) => {
    const langs = data.languages.map(({ name }) => name)
    const [getOutput, { data: outData }] = useGetOutputCodeMutation()
    useEffect(() => {
        actions.setOutputLanguage(langs[0])
    }, [])
    const [
        {
            settings,
            showSettings,
            skemaEditor: { code: skemaCode }
        },
        actions
    ] = useGlobal()
    const language = settings.language
    const schema = language
        ? data.languages.find(({ name }) => name === language).optionsSchema
        : {}
    const style: CSSProperties = {
        display: showSettings ? 'block' : 'none',
        position: 'absolute',
        right: 0,
        top: 0
    }

    return (
        <Box
            width='300px'
            style={style}
            // border='1px solid red'
            // borderRadius='10px'
            // background='#fff'
            // minHeight='200px'
            // m='40px'
            // mt='0px'
            // boxShadow='0 0 15px rgba(0, 0, 0, .2)'
            // p='20px'
        >
            <Card elevation={3}>
                <FormGroup label='Language to putput code'>
                    <HTMLSelect
                        fill
                        value={language}
                        onChange={(e) =>
                            actions.setOutputLanguage(e.target.value)
                        }
                        options={langs.map((value) => ({ value })) as any}
                    />
                </FormGroup>
                <SchemaForm
                    onChange={({ values }) => actions.setOptions(values)}
                    schema={schema}
                    skipValidation={true}
                />
                <FormGroup>
                    <Button
                        fill
                        disabled={!settings.language}
                        onClick={() => {
                            actions.setOutputCode(
                                getOutput({
                                    variables: {
                                        skema: skemaCode,
                                        options: settings.options,
                                        language: settings.language as LanguageName
                                    }
                                }).then(({ data }) => data.output.code + '\n\n\n\n')
                            )
                        }}
                        intent='primary'
                    >
                        Convert
                    </Button>
                </FormGroup>
            </Card>
        </Box>
    )
}
