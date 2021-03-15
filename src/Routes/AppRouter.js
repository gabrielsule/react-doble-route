import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../components/login/Login';
import AuthorRouter from './AuthorRouter';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact={true} path='/login' component={Login} />
                <Route path='/' component={AuthorRouter} />
            </Switch>
        </Router>
    )
}

export default AppRouter;