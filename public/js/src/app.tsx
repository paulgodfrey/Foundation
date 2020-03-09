import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Router } from '@reach/router'

/* Components */
import { PrimaryNavigation } from '@root/components/PrimaryNavigation'

/* Page Loaders */
import { HomePage, AboutPage } from '@root/pages/PageLoader'

const App = () => (
  <div>
    <PrimaryNavigation />
    <Router>
      <HomePage path="/" />
      <AboutPage path="/about" />
    </Router>
  </div>
)

ReactDOM.render(<App />, document.getElementById('react-root'))
