import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import NewsletterPage from './NewsletterPage'

const App = () => (
  <Router>
    <div>
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/newsletters/:newsletterId" component={NewsletterPage} />
    </div>
  </Router>
)

export default App
