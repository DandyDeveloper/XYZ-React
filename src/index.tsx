import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createHashHistory } from 'history';
import { App } from './containers/App';
import { Router, Route, Switch } from 'react-router-dom';

const history = createHashHistory();

ReactDOM.render(
    <Router history={history}>
    	<Switch> 
    		<Route path="/" component={App} />
		</Switch>
    </Router>,
  document.getElementById('root')
);
