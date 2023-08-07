/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import usePermissions from '../../Hooks/usePermissions';
// Utils
import pluginId from '../../pluginId'
// Containers
import HomePage from '../HomePage'

const theme = {
  colors: {
    backgroundColor: '#ffffff',
    shadows: '#e3e9f3',
  },
}

const App = () => {
  const { canRead, loading } = usePermissions();

  if (loading) return null;

  if (!canRead) return <Redirect to="/" />;

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path={`/plugins/${pluginId}`} component={HomePage} exact />
      </Switch>
    </ThemeProvider>
  )
}

export default App
