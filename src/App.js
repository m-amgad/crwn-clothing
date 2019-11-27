import React from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';
import './App.css';

const Page = ({match})=>(
  <h1>{match.params.cat.toUpperCase()}</h1>
)

function App() {
  return (
    <div>
      <Switch>
        <Route component={HomePage}  path="/" exact />
        <Route component={Page}  path="/shop/:cat" exact />
      </Switch>
    </div>
  );
}

export default App;
