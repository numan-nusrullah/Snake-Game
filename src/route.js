import React from 'react';
import App from './App';
import Homepage from './Home';
import {BrowserRouter , Route ,Switch } from 'react-router-dom';
const Snake = () => {
    return (
        
            <BrowserRouter>
            <Switch>
             <Route exact path="/" component={Homepage}/>
             <Route path="/game" component={App}/>
             <Route path="/Newgame" component={App}/>
             </Switch>
             </BrowserRouter>
      
    );
}

export default Snake;
