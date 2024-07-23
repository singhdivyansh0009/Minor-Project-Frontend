import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import LawyerList from './components/lawyerlist/lawyerlist';
import Cookies from 'js-cookie';
import Profile from './components/profile/profile';
import ProviderDetails from './components/ProviderDetail/ProviderDetail';
import Kyc from'./components/kyc/kyc';
import UnderReview from './components/kyc/underReviewMessage'
function App() {
  const [loginuser, setLoginUser] = useState(null);

  const onLoginSuccess = (user) => {
    // user is an object representing the logged-in user
    setLoginUser(user);
  };

  const handleLogout = () => {
    setLoginUser(null);
    Cookies.remove('token');
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={ <Homepage user={loginuser} onLogout={handleLogout} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLoginSuccess={onLoginSuccess} />} />
        <Route path='/lawyer-list' element={<LawyerList user = {loginuser}  onLogout={handleLogout}/>} />
        <Route path='/profile' element={<Profile user = {loginuser}  onLogout={handleLogout}/>}/>
        <Route path='/ProviderDetails/:id' element={<ProviderDetails user = {loginuser}  onLogout={handleLogout}/>}/>
        <Route path="/kyc" element={<Kyc/>} />
        <Route path="/underReview" element={<UnderReview/>} />
      </Routes>
    </Router>
  );
}

export default App;
