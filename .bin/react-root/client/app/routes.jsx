import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Application from './Components/Application';
import MainPage from './Views/MainPage';
import SearchPage from './Views/SearchPage';
import SavedPage from './Views/SavedPage';

export default (
	<Route component={Application}>
		<Route path="/" component={MainPage}></Route>
		<Route path="search" component={SearchPage}></Route>
		<Route path="saved" component={SavedPage}></Route>
    <IndexRoute component={MainPage}/>
	</Route>
);