// In App.js in a new project
import * as React from 'react'
import { Provider } from 'react-redux'
import { userSession } from './src/store/reducers/userSession'
import NavigationInit from './src/screens/Navigation/NavigationInit'

function App () {
  return (
    <Provider store={userSession}>
      <NavigationInit />
    </Provider>
  )
}

export default App
