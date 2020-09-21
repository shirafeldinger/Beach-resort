import React from 'react';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/rooms/" component={Rooms}/>
    <Route exact path="/rooms/:lemon" component={SingleRoom}/>
    {/* Error doesnt have exact path becuse whatever location that doesnt match the above paths will lead to Error page */}
    <Route component={Error}/>
    </Switch>
    </>
  );
}

export default App;
