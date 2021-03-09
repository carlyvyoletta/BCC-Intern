import React, {useState} from 'react';
import "./App.css";
import Home from './components/Home/Home';
import { Navbar2, Footer} from "./components";
import { SignIn, SignUp, About, Product, Tracking, Trolley} from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "./config/Auth";
import PrivateRoute from './config/PrivateRoute';

const App = () => {

  const existingToken = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingToken)

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data)
  }

  return (
    <AuthContext.Provider value={{authTokens, setAuthTokens: setTokens}}>
      <Router>
          <Navbar2 />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Signin" component={SignIn} />
            <Route path="/Signup" component={SignUp} />
            <Route path="/about" component={About}/>
            <Route path="/product" component={Product}/>
            <Route path="/tracking" component={Tracking}/>
            <PrivateRoute path="/trolley" component={Trolley}/>
          </Switch>
          <Footer />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
