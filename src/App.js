import './App.css';
import Profile from './pages/Profile/Profile';
import React from 'react';
import Home from './pages/home/Home';
import Auth from './pages/Auth/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

{
  /* <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      <Profile></Profile>
      <Auth></Auth> */
}
