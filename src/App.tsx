import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { routeList } from './routes';
import Header from './shared/Header';
import Footer from './shared/Footer';

const App: React.FC = () => {
  const history = createBrowserHistory();
  return (
    <>
      <Router history={history}>
        <Header />
        <Switch>
          {routeList.map(({path, ...rest}): any => 
            (<Route key={path} path={path} {...rest} />)
          )}
        </Switch>
        <Footer/ >
      </Router>
    </>
    
  );
}

export default App;
