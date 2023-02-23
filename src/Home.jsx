import React from "react";
import App from "./Pages/App";
import { Route, Switch } from "react-router-dom";
import InterviwePanel from "./Pages/InterviwePanel";
import KNOWLEDGE from "./Pages/KNOWLEDGE";
import Fullfaq from "./Pages/Fullfaq";
import BlogsFullPage from "./Pages/BlogsFullPage";
import BusinessPanel from "./Pages/BusinessPanel";

export default function Home() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <App />
        </Route>
        <Route path="/Interview">
          <InterviwePanel />
        </Route>
        <Route path="/KNOWLEDGE">
          <KNOWLEDGE />
        </Route>
        <Route path="/FullPageFaq">
          <Fullfaq />
        </Route>
        <Route path="/Blog">
          <BlogsFullPage />
        </Route>
        <Route path="/BusinessPanel">
          <BusinessPanel />
        </Route>
      </Switch>
    </>
  );
}
