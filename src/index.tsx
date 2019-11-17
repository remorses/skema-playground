import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from './constants'
import { GraphqlProvider } from 'react-apollo-the-easy-way'
import SplitPane from 'react-split-pane'
import './index.css'

console.log(process.env.MOCKING)

import {
    GRAPHQL_MOCKING_ENDPOINT,
    GRAPHQL_PRODUCTION_ENDPOINT,
    GRAPHQL_TESTING_ENDPOINT,
    LOCAL_STORAGE_JWT_TOKEN_KEY,
    mocking
} from './constants'
import { Box, Row } from 'hybrid-components'
import CodeEditor from './CodeEditor'
import SkemaEditor from './SkemaEditor'
import OutputEditor from './OutputEditor'
import SettingsCard from './SettingsCard'

const graphqlOptions = {
    GRAPHQL_MOCKING_ENDPOINT,
    GRAPHQL_PRODUCTION_ENDPOINT,
    GRAPHQL_TESTING_ENDPOINT,
    LOCAL_STORAGE_JWT_TOKEN_KEY,
    mocking
}

const AppView = () => {
    return (
        <Row height='100vh'>
            <SplitPane split='vertical' minSize={50} defaultSize='50%'>
                {/* <Pane initialSize='50%'>1</Pane>
                <Pane initialSize='50%'>2</Pane> */}
                <SkemaEditor />
                <OutputEditor />
            </SplitPane>

            <SettingsCard />
        </Row>
    )
}

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <GraphqlProvider {...graphqlOptions}>
                {/* <Router>
                    <Switch>
                        <Route
                            path='/'
                            exact
                            component={() => <div>ciao</div>}
                        />
                    </Switch>
                </Router> */}
                <AppView />
            </GraphqlProvider>
        </ThemeProvider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept()
}
