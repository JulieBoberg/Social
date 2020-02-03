import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "../src/components/layout/Landing";
import Navbar from "../src/components/layout/Navbar";
import Login from "../src/components/auth/Login";
import Register from "../src/components/auth/Register";
import Alert from "../src/components/layout/Alert";
import { loadUser } from "./actions/auth";
import { Provider } from "react-redux";
import setAuthToken from "../src/utils/setAuthToken";
import store from "./store";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;