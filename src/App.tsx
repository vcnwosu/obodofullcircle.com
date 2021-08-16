import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { routeList } from './routes';
import Header from './shared/components/Header';
import Footer from './shared/components/Footer';
import HomeTestimonials from './modules/Home/components/HomeTestimonials';
import HomeStore from './shared/components/HomeStore';
import HomeTeaching from './shared/components/HomeTeaching';
import { Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { EpisodeContextProvider } from './store/EpisodeContext';

const spinner = (
  <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
    <Spinner animation="border" variant="success" />
  </div>
)

toast.configure();
const App: React.FC = () => {
  const history = createBrowserHistory();
  console.log(history)
  return (
    <>
      <EpisodeContextProvider>
        <Router history={history}>
          <React.Suspense fallback={spinner}>
            {!history.location.pathname.includes('payments') && <Header />}
            <Switch>
              {routeList.map(({ path, ...rest }): any =>
                (<Route key={path} path={path} {...rest} />)
              )}
            </Switch>
            {/* <HomeTestimonials /> */}
            {!history.location.pathname.includes('payments') && <HomeStore />}
            {!history.location.pathname.includes('payments') && <HomeTeaching />}
            {!history.location.pathname.includes('payments') && <Footer />}
          </React.Suspense>
        </Router>
      </EpisodeContextProvider>
    </>

  );
}

export default App;
