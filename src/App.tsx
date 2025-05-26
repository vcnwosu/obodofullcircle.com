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
import { AuthProvider } from './store/AuthContext';

const spinner = (
  <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
    <Spinner animation="border" variant="success" />
  </div>
)

const episodeContextRoutes = [
  'episodes',
  'exchange-program',
  'transcripts',
  'about-us',
  'login',
  'dashboard',
  'verify-otp',
  'igbo-exchange-signup',
  '/'
]

const pubRoutes = [
  'pages',
  'payments',
]

toast.configure();
const App: React.FC = () => {
  const history = createBrowserHistory();
  return (
    <>
      {(pubRoutes.map((pubroute) => history.location.pathname.includes(pubroute)).reduce((acc, val) => acc || val, false)) ?
        <Router history={history}>
          <AuthProvider>
            <React.Suspense fallback={spinner}>
              <Switch>
                {publicRouteList.map(({ path, ...rest }): any =>
                  (<Route key={path} path={path} {...rest} />)
                )}
              </Switch>
            </React.Suspense>
          </AuthProvider>
        </Router> :
        (episodeContextRoutes.map((contextroute) => history.location.pathname.includes(contextroute)).reduce((acc, val) => acc || val, false)) ?
          <EpisodeContextProvider>
            <Router history={history}>
              <AuthProvider>
                <React.Suspense fallback={spinner}>
                  <Header />
                  <Switch>
                    {routeList.map(({ path, ...rest }): any =>
                      (<Route key={path} path={path} {...rest} />)
                    )}
                  </Switch>
                  {/* <HomeTestimonials /> */}
                  <HomeStore />
                  <HomeTeaching />
                  <Footer />
                </React.Suspense>
              </AuthProvider>
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
