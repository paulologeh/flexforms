import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { NotFound } from 'navigation/NotFound'
import Home from 'pages/Home'
import {Login, SignUp, Reset} from 'pages/Authentication'
import { ROOT, SIGN_IN, SIGN_UP, RESET, FORM_EDITOR, FORM_VIEWER, DASHBOARD, DATA_VIEWER} from 'navigation/CONSTANTS'


export const RouterConfig = () => {
    return (
        <div>
            <Switch>
                <Route exact path={ROOT} component={Home} />
                <Route exact path={SIGN_IN} component={Login} />
                <Route exact path={SIGN_UP} component={SignUp} />
                <Route exact path={RESET} component={Reset}/>
                <Route expcomponent={NotFound}/>
            </Switch>
        </div>
    )
}
