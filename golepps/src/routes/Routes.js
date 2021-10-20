import React, { lazy, Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

// import AuthenticatedRoute from 'routes/AuthenticatedRoute';
// import UnauthenticatedRoute from 'routes/UnauthenticatedRoute';
import Loader from '../components/Loader/Loader';

const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));
const FindGolfCourse = lazy(() =>
	import('../pages/FindGolfCourse/FindGolfCourse')
);
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

function Routes({ childProps }) {
	return (
		<Suspense fallback={<Loader />}>
			<Switch>
				<Route exact path="/">
					<Redirect to="/dashboard" />
				</Route>
				<Route
					exact
					path="/dashboard"
					component={Dashboard}
					props={childProps}
				/>
				<Route
					exact
					path="/find-golf-course"
					component={FindGolfCourse}
					props={childProps}
				/>
				<Route render={(props) => <NotFound {...props} />} />
			</Switch>
		</Suspense>
	);
}

export default withRouter(Routes);
