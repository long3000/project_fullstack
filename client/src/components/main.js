// TIE all necessary components together
import React from  'react';
import { Switch, Route} from 'react-router-dom';

import landingPage from './landingPage';

const Main = () => {
    return (
        <Switch>
        <Route exact path = "/" component={landingPage} />
    </Switch>
    )
}

export default Main;