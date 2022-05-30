import { Routes, Route } from "react-router-dom";
import './App.css';
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Signup from "./Pages/Login/Signup";
import PartsDetail from "./Pages/PartsDetail/PartsDetail";
import Navbar from "./Shared/Navbar";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";
import AddReview from "./Pages/Dashboard/AddReview";
import MyProfile from "./Pages/Dashboard/MyProfile";
import NotFound from "./Shared/NotFound";

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path='/part/:partId' element={<RequireAuth>
          <PartsDetail></PartsDetail>
        </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}  ></Route>
          <Route path="review" element={<AddReview></AddReview>}  ></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}  ></Route>

        </Route>



        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
