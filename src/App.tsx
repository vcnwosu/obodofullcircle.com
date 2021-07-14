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
import CustomSpinner from './shared/components/Spinner';

const spinner = (
  <div className="d-flex justify-content-center align-items-center" style={{minHeight: '100vh'}}>
    <Spinner animation="border" variant="success" />
  </div>
)

toast.configure();
const App: React.FC = () => {
  const history = createBrowserHistory();
  return (
    <>
      <Router history={history}>
        <React.Suspense fallback={spinner}>
          <Header />
          <Switch>
            {routeList.map(({ path, ...rest }): any =>
              (<Route key={path} path={path} {...rest} />)
            )}
          </Switch>
          <HomeTestimonials />
          <HomeStore />
          <HomeTeaching />
          <Footer />
        </React.Suspense>
      </Router>
      {/* <CustomSpinner /> */}
    </>

  );
}

export default App;
