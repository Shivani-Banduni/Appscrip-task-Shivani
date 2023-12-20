import './App.css';
// import ResponsiveAppBar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './components/Navbar';
import Addblog from './components/Addblog';
import Allblog from './components/Allblog';
import LoginButton from './components/Login';
import BlogHomePage from './components/Home';
import { useAuth0 } from '@auth0/auth0-react';
import Addcomment from './components/Addcomment';
function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(isAuthenticated,"isAuthenticated")
  return (
    <div className="App">
<ResponsiveAppBar/>
{
  isAuthenticated?<Routes>
<Route path='/' element={<BlogHomePage/>}></Route>

      <Route path='/addblog' element={<Addblog/>}></Route>
      <Route path='/allblog' element={<Allblog/>}></Route>
      <Route path='/addcomment' element={<Addcomment/>}></Route>



    </Routes>:    <Routes>
<Route path='/' element={<BlogHomePage/>}></Route>
    </Routes>    
}

    
    </div>
  );
}

export default App;
