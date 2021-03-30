import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import PhotosGallery from './components/PhotoGallery';
import UserGallery from './components/UserGallery';

import UserContextProvider from './contexts/UserContext';
import PhotoContextProvider from './contexts/PhotoContext';




function App() {
  return (
    <div className="App ">

      <Router>
        <Switch>
          <UserContextProvider>
            <PhotoContextProvider>
              
                <Route path="/photos-gallery" component={PhotosGallery}></Route>
                <Route path="/user-gallery" component={UserGallery}></Route>
                <Route path="/" component={Dashboard} exact></Route>
              
            </PhotoContextProvider>
          </UserContextProvider>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
