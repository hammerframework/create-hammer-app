import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'

import Routes from 'src/Routes'

import './index.css'

const App = (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider>
      <Routes />
    </RedwoodProvider>
  </FatalErrorBoundary>
)

const rootElement = document.getElementById('redwood-app')

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(App, rootElement)
} else {
  ReactDOM.render(App, rootElement)
}
