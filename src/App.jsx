import React from 'react'
import LandingPage from './components/LandingPage'




const App = () => {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/register" component={EventRegForm} />
        {/* <Route path="/event/:eventId" component={EventPage} /> */}
      </Switch>
    </div>
  </Router>
  )
}

export default App