// TIE all necessary components together
import React from  'react';
import { Switch, Route} from 'react-router-dom';

import landingPage from './landingPage';
import profile from './profile';
import profileEdit from './profileEdit';

const Main = () => {
    return (
        <Switch>
        <Route exact path = "/" component={landingPage} />
        <Route path = "/profile" component={profile} />
        <Route path = "/profile_edit" component={profileEdit} />
    </Switch>
    )
}

export default Main;