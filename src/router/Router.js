import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Auth } from "../views/Auth/Auth.js"
import { Home } from "../views/Home/Home.js"

export const Router = () => {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/auth" component={Auth}/>
                <Route exact path="/home" component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}