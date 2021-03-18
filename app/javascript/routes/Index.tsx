import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Detail from "../components/buildpack/Detail";
import SearchResults from "../components/SearchResults/SearchResults"

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" exact component={SearchResults} />
            <Route path="/buildpacks/:ns/:name" exact component={Detail} />
        </Switch>
    </Router>
);
