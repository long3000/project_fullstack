// TIE all necessary components together
import React from  'react';
import { Switch, Route} from 'react-router-dom';

import landingPage from './landingPage';
import profile from './profile';
import profileEdit from './profileEdit';
import submitUser from './submitUser';

const Main = () => {
    return (
        <Switch>
        <Route exact path = "/" component={landingPage} />
        <Route path = "/profile" component={profile} />
        <Route path = "/profile_edit" component={profileEdit} />
        <Route path = "/submit_user" component={submitUser} />
    </Switch>
    )
}

export default Main;