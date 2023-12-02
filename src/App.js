import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home.jsx';
import Login from "./pages/auth/Login.jsx"
import Signup from './pages/auth/Signup.jsx';
import User from './pages/profile/User.jsx';
import Profile from './pages/profile/Profile.jsx';
import Account from './pages/profile/Account.jsx';
import Details from './pages/profile/Details.jsx';
import ErrorBoundary from './pages/error/ErrorBoundary.jsx';
import Default from './pages/home/Default.jsx';
import Search from "./pages/search/Search.jsx"
import CreatePlaylist from './pages/playlist/CreatePlaylist.jsx';
import ArtistProfile from './pages/artist/ArtistProfile.jsx';


function App() {

  return (
    <div className="App">

       <Routes>
          <Route exact path='/' element={<Home/>}>
              <Route index element={<Default/>}/>
              <Route path='search' element={<Search/>}/>
              <Route path='create-playlist' element={<CreatePlaylist/>}/>
              <Route path='artist-profile' element={<ArtistProfile/>}/>
          </Route>
          <Route path='login' element={<Login/>} />
          <Route path='signup' element={<Signup/>} />
          <Route path='user' element={<User/>}>
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
