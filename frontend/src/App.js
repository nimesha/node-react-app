import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import PhotosGallery from './components/PhotoGallery';
import UserGallery from './components/UserGallery';






function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/photos-gallery" component={PhotosGallery}></Route>
          <Route path="/user-gallery" component={UserGallery}></Route>
          <Route path="/" component={Dashboard}></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
