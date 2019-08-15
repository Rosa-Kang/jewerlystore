import React from "react";
import MainCtrl from "./containers/mainContainer";
import Shop from "./components/Shop";
import NewsCtrl from "./containers/newContainer";
import ContactCtrl from "./containers/contactContainer";
import "./styles/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter basename="/jewerlystore">
        <Switch>
          <Route path="/jewerlystore" exact component={MainCtrl} />
          <Route path="/jewerlystore/shop" component={Shop} />
          <Route path="/jewerlystore/news" component={NewsCtrl} />
          <Route path="/jewerlystore/contact" component={ContactCtrl} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
