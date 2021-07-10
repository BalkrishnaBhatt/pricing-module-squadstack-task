import '@tailwindcss/ui/dist/tailwind-ui.css';
import React, { useState } from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Pricing from './components/Pricing';
import NoInternet from './components/NoInternet';
import PriceModal from './components/PriceModal';
import './css/fonts.css';
import './css/style.css';
const App = (props: any) => { 
  let [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <Router>
        <Route exact path="/">
          {
            window.navigator.onLine ?  <Pricing /> : <NoInternet /> 
          }
          {/* <PriceModal /> */}
        </Route>
      </Router>
    </>
  );
};
export default App;
