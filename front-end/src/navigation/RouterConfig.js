import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'pages/Home/Home'
import { Creator, Preview } from 'pages/Creator/index'
import { NotFound } from 'navigation/NotFound'
import { ROOT, CREATOR, PREVIEW } from 'navigation/CONSTANTS'


export const RouterConfig = () => {
    return (
        <div>
            <Switch>
                <Route exact path={ROOT} component={Home} />
                <Route exact path={CREATOR} component={Creator} />
                <Route exact path={PREVIEW} component={Preview} />
                <Route expcomponent={NotFound}/>
            </Switch>
        </div>
    )
}
