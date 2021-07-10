import '@tailwindcss/ui/dist/tailwind-ui.css';
import React from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Pricing from './components/Pricing';
import NoInternet from './components/NoInternet';
import PriceModal from './components/PriceModal';

const App = (props: any) => {

  return (
    <>
      <Router>
        <Route exact path="/">
          {
            window.navigator.onLine ? <Pricing /> : <NoInternet />
          }
          {/* <PriceModal /> */}
        </Route>
      </Router>
    </>
  );
};
export default App;
