import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import SplashPage from "./components/SplashPage";
import BoatListings from "./components/BoatListings";
import Navigation from "./components/Navigation";
import BoatListingPage from "./components/BoatListingPage";
import Footer from './components/Footer/index'

function App() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  
 if (!sessionUser) {  return (
   <>
     <Navigation isLoaded={isLoaded} />
     {isLoaded && (
       <BrowserRouter>
         <Switch>
           <Route path="/" exact>
             <SplashPage />
           </Route>
           <Route path="/signup">
             <SignupFormPage />
           </Route>
           <Route path="/listings" exact>
             <BoatListings />
           </Route>
           <Route path="/listings/:id">
             <BoatListingPage />
           </Route>
           <Route path="/reviews"></Route>
         </Switch>
         <Footer />
       </BrowserRouter>
     )}
   </>
 );
}
return (
  <>
    <Navigation isLoaded={isLoaded} />
    {isLoaded && (
      <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <SplashPage />
        </Route>
        <Route path="/listings" exact>
          <BoatListings />
        </Route>
        <Route path="/listings/:id">
          <BoatListingPage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
    )}
  </>
);
}

export default App;




