import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { routeList, publicRouteList } from './routes';
import Header from './shared/components/Header';
import Footer from './shared/components/Footer';
import HomeTestimonials from './modules/Home/components/HomeTestimonials';
import HomeStore from './shared/components/HomeStore';
import HomeTeaching from './shared/components/HomeTeaching';
import { Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { EpisodeContextProvider } from './store/EpisodeContext';
import NotFound from './modules/NotFound';

const spinner = (
  <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
    <Spinner animation="border" variant="success" />
  </div>
)

toast.configure();
const App: React.FC = () => {
  const history = createBrowserHistory();
  return (
    <>
      {(history.location.pathname.includes('pages') || history.location.pathname.includes('payments')) ?
        <Router history={history}>
          <React.Suspense fallback={spinner}>
            <Switch>
              {publicRouteList.map(({ path, ...rest }): any =>
                (<Route key={path} path={path} {...rest} />)
              )}
            </Switch>
          </React.Suspense>
        </Router> :
        (history.location.pathname.includes('episodes') || history.location.pathname.includes('exchange-program') || history.location.pathname.includes('transcripts') || history.location.pathname.includes('about-us') || history.location.pathname === '/')?
          <EpisodeContextProvider>
            <Router history={history}>
              <React.Suspense fallback={spinner}>
                {/* <Header /> */}
                <Switch>
                  {routeList.map(({ path, ...rest }): any =>
                    (<Route key={path} path={path} {...rest} />)
                  )}
                </Switch>
                {/* <HomeTestimonials /> */}
                {/* <HomeStore /> */}
                {/* <HomeTeaching /> */}
                {/* <Footer /> */}
              </React.Suspense>
            </Router>
          </EpisodeContextProvider> :
          <Router history={history}>
            <Route path="*" exact={true} component={NotFound} />
          </Router>
      }
    </>

  );
}

export default App;
