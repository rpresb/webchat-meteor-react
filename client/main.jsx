import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import { Meteor } from 'meteor/meteor';

import App from '../imports/ui/App.jsx';

const NoMatch = React.createClass({
  render() {
    return (<h2>Página não encontrada</h2>);
  }
})

Meteor.startup(() => {
  render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  ), document.getElementById('root'));
});