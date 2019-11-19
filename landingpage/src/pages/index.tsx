import {
    Hero,
    Section,
    Steps,
    Feature,
    Logo,
    Button,
    Provider,
    Code,
    FeatureList,
    Head,
    SubHead,
    Line,
    SignupForm
} from 'react-landing-page-components'
import React from 'react'
import { H1, Image, Text, Box } from 'hybrid-components'
import {
    Archive,
    Airplay,
    Layers,
    Grid,
    PackageIcon,
    Sliders,
    ArrowRight,
    Scissors,
    File,
    FileText,
    Terminal,
    TrendingUp
} from 'styled-icons/feather'
import { RightArrowAlt, CodeCurly } from 'styled-icons/boxicons-regular'
import { simpleUsage, unionsUsage, interfacesUsage } from './constants'

const MAILCHIMP_URL = ''

const App = () => {
    return (
        <Provider color='#000' gradients={['#fff', '#ffe']}>
            <Hero>
                <Logo
                    width={['100%', null, '800px']}
                    src={require('./skema_logo.svg')}
                />
                {/* <Head fontSize='60px'>Skema</Head> */}
                <SubHead>One source of truth for all your types</SubHead>
                {/* <SignupForm action={MAILCHIMP_URL} /> */}
                <Button href='/app'>Start Playground</Button>
                <a href='/docs'>
                    Documentation
                    <RightArrowAlt display='inline' width='20px' />
                </a>
            </Hero>
            <Line />
            {/* <Section>
                <Steps>
                    <Steps.Step
                        title='Write a .skema schema'
                        description=''
                        icon={<FileText />}
                    />
                    <Steps.Step
                        title='Generate your types'
                        description=''
                        icon={<Terminal />}
                    />
                    <Steps.Step
                        title='Profit'
                        description=''
                        icon={<TrendingUp />}
                    />
                </Steps>
            </Section> */}
            <Section>
                {/* <Head>Cose</Head> */}
                {/* <SubHead >
                    Skema is a language that compiles to other languages types.
                </SubHead> */}
                <FeatureList>
                    <FeatureList.Feature
                        icon={<Grid width='90px' />}
                        title='Generate types for every language on your stack'
                        description='Supported typescript, graphql, jsonschema, python and many others coming'
                    />
                    <FeatureList.Feature
                        icon={<Layers width='90px' />}
                        title='One source of truth, every service in sync'
                        description='You can host the schema online and generate the same domain types for all the teams shared types'
                    />
                    <FeatureList.Feature
                        icon={<PackageIcon width='90px' />}
                        title='Generate fake data for mocking easily'
                        description='The schema can be used to generate json data that validates correctly'
                    />
                    <FeatureList.Feature
                        icon={<Sliders width='90px' />}
                        title='Use as documentation, validation and types'
                        description='Can be used to document json data shape and so APIs and configurations files'
                    />
                    <FeatureList.Feature
                        icon={<Scissors width='90px' />}
                        title='Infer skema from other json data'
                        description='Useful for reverse engineering APIs and understand other system architectures'
                    />
                </FeatureList>
            </Section>

            <Section>
                <Head>Features</Head>
                <Feature
                    title='Simple syntax'
                    description={`
                    Concerto lets you model the data used in your templates in a flexible and expressive way. 
                    Models can be written in a modular and portable way so they can be reused in a variety of contracts.
                    `}
                    image={
                        // <img src='https://bemuse.ninja/project/img/screenshots/mode-selection.jpg' />
                        <Code language='yaml' code={simpleUsage} />
                    }
                />
                <Feature
                    right
                    title='Composable'
                    description={`
                    Concerto lets you model the data used in your templates in a flexible and expressive way. 
                    Models can be written in a modular and portable way so they can be reused in a variety of contracts.
                    `}
                    image={
                        // <img src='https://bemuse.ninja/project/img/screenshots/mode-selection.jpg' />
                        <Code language='yaml' code={unionsUsage} />
                    }
                />
                <Feature
                    title='Powerful possibilities'
                    description={`
                    Concerto lets you model the data used in your templates in a flexible and expressive way. 
                    Models can be written in a modular and portable way so they can be reused in a variety of contracts.
                    `}
                    image={
                        // <img src='https://bemuse.ninja/project/img/screenshots/mode-selection.jpg' />
                        <Code language='yaml' code={interfacesUsage} />
                    }
                />
            </Section>
        </Provider>
    )
}

export default App

// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept()
}
