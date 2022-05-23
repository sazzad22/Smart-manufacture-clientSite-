import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import NotAvailable from './Pages/Shared/NotAvailable';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div
    
    >
      <Header></Header>
      <Routes>

        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/signup' element={<SignUp></SignUp>} ></Route>
        <Route path='/blogs' element={<Blogs></Blogs>} ></Route>



        <Route path='*' element={<NotAvailable></NotAvailable>} ></Route>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
