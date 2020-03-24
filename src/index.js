import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './reset.css';
import './common.css';
import App from './app.js';
import registerServiceWorker from './registerServiceWorker';
import Home from './components/home/index';

ReactDOM.render(
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </App>
    </BrowserRouter>,
  document.getElementById('truebilAppRoot'),
);

registerServiceWorker();