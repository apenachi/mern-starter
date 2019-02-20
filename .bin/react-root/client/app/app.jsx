import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
	<Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
);
