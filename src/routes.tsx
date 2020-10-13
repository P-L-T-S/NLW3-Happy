import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./pages/landing";
import OrfanagesMap from "./pages/orphanagesMap"
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/app" component={OrfanagesMap}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;