import React, {useState} from 'react';
import "./App.css";
import { Navbar, Welcome, Rekomendasi, Layanan, Footer } from "./components";
import { SignIn, SignUp, About, Product, Tracking, Trolley} from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "./config/Auth";

const Homepage = () => (
  <div>
    <Welcome />
    <Rekomendasi />
    <Layanan />
  </div>
);

const App = () => {
  const existingToken = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingToken);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{authTokens, setAuthTokens: setTokens}}>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/Signin" component={SignIn} />
            <Route path="/Signup" component={SignUp} />
            <Route path="/about" component={About}/>
            <Route path="/product" component={Product}/>
            <Route path="/tracking" component={Tracking}/>
            <Route path="/trolley" component={Trolley}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
