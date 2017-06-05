import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { App } from './containers/App';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
    	<Switch> 
    		<Route path="/" component={App} />
		</Switch>
    </Router>,
  document.getElementById('root')
);
