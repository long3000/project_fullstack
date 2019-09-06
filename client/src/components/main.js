// TIE all necessary components together
import React from  'react';
import { Switch, Route} from 'react-router-dom';

import landingPage from './landingPage';
import profile from './profile';
import profileEdit from './profileEdit';
import submitUser from './submitUser';
import testPage from './testPage';
import detailsPage from './details';
import userList from './landingPage';
import loginPage from './loginPage';


const Main = () => {
    return (
        <Switch>
            <Route exact path = "/" component={loginPage} />
            <Route exact path = "/profile" component={profile} />
            <Route exact path = "/profile/:uuid/edit" component={profileEdit} />
            <Route exact path = "/profile/:uuid" component={detailsPage} />
            <Route exact path = "/admin" component={landingPage} />
            <Route path = "/users" component={userList} />
            <Route path = "/submit_user" component={submitUser} />
            <Route path = "/test_page/:uuid" component={testPage} />
        </Switch>
    )
}

export default Main;