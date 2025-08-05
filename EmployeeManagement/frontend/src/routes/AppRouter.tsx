import { BrowserRouter, Routes, Route } from 'react-router';
import Login from '../pages/Login';
import Register from '../pages/Register';


import LayoutWrapper from '../components/LayoutWrapper';
import CompanyRegisteration from '../pages/CreateCompany';
import UserProfilePage from '../pages/Allemployee';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-company" element={<CompanyRegisteration />} />
          <Route path="/user" element={<UserProfilePage/>} />
        <Route path="/d" element={<LayoutWrapper />}>
       
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;