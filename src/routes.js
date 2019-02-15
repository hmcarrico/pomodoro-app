import React from 'react'
import {Switch, Route} from 'react-router-dom';
//components
import Timer from './Components/Timer/Timer';

export default <Switch>
    <Route exact path='/' component={Timer} />
</Switch>