import "./App.scss";
import React from "react";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import { Content } from "carbon-components-react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./content/LandingPage";
import CartPage from "./content/CartPage";
import AccountPage from "./content/AccountPage";

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Content>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/account" component={AccountPage} />
        </Switch>
      </Content>
    </div>
  );
}

export default App;
