import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Asimov from '../components/authors/Asimov';
import Bradbury from '../components/authors/Bradbury';
import Clarke from '../components/authors/Clarke';
import Dick from '../components/authors/Dick';
import { Navbar } from '../components/ui/Navbar';

const AuthorRouter = () => {
    return (
        <>
            <Navbar />

            <Switch>
                <Route exact path='/asimov' component={Asimov} />
                <Route exact path='/bradbury' component={Bradbury} />
                <Route exact path='/clarke' component={Clarke} />
                <Route exact path='/dick' component={Dick} />
                <Redirect to='/clarke' />
            </Switch>
        </>
    )
}

export default AuthorRouter;