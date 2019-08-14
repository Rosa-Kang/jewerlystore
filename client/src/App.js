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
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MainCtrl} />
          <Route path="/shop" component={Shop} />
          <Route path="/news" component={NewsCtrl} />
          <Route path="/contact" component={ContactCtrl} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
