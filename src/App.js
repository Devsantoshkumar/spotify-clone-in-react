import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/content/home/Home.jsx';
import Login from './components/auth/Login.jsx';
import Signup from './components/auth/Signup.jsx';
import User from './components/profile/User.jsx';
import Profile from './components/profile/Profile.jsx';
import Account from './components/profile/Account.jsx';
import Details from './components/profile/Details.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

function App() {

  return (
    <div className="App">

       <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='login' element={<Login/>} />
          <Route exact path='signup' element={<Signup/>} />
          <Route exact path='user' element={<User/>}>
              <Route index element={<Details/>}/>
              <Route path='profile' element={<Profile/>}/>
              <Route path='account' element={<Account/>}/>
          </Route>
          <Route path='*' element={<ErrorBoundary/>} />
       </Routes>
    </div>
  );
}

export default App;
