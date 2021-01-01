import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'pages/Home/Home'
import { NotFound } from 'navigation/NotFound'
import {ROOT} from 'navigation/CONSTANTS'

export const RouterConfig = () => {
    return (
        <div>
            <Switch>
                <Route exact path={ROOT} component={Home} />
                <Route component={NotFound}/>
            </Switch>
        </div>
    )
}
