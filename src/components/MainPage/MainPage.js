import React from 'react';
import {Switch, Route, Link, useLocation} from 'react-router-dom';
import Ant from '../Ant/Ant';
import Devlog from '../Devlog/Devlog';

const MainPage = (props) => {

  let location = useLocation();

  return <>
    <nav>
      <Link to="/">ANT</Link>
      <Link to="/devlog">DEVLOG</Link>
    </nav>
    <Switch location={location}>
      <Route exact path="/">
        <Ant/>
      </Route>
      <Route path="/devlog">
        <Devlog/>
      </Route>
      <Route path="*">
        404
      </Route>
    </Switch>
  </>

}

export default MainPage;