import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Admin from "./components/admin";
import Main from "./components/main";
import Login from "./components/main/Login";
import Register from "./components/main/Register";
import User from "./components/user";
import Home from "./components/main/Home";
import AdminProvider from "./context/AdminProvider";
import UserProvider from "./context/UserProvider";
import UserProfile from "./components/user/UserProfile";
import AdminAuth from "./auth/AdminAuth";
import UserAuth from "./auth/UserAuth";
import { useState } from "react";
import {Toaster} from 'react-hot-toast';
import ExtCreator from "./components/user/ExtCreator";
import MyExtensions from "./components/user/MyExtensions";
import Preview from "./components/user/Preview";

function App() {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const [currentAdmin, setCurrentAdmin] = useState(JSON.parse(sessionStorage.getItem('admin')));

  return (
    <div>
      <BrowserRouter>
      <Toaster position="top-center" />
        <AdminProvider currentAdmin={currentAdmin}>
          <UserProvider currentUser={currentUser}>
            <Routes>
              <Route path="/" element={<Navigate to="/main/home" />} />
              <Route path="admin" element={<AdminAuth><Admin /></AdminAuth>}>
                {/* <Route path='managegames' element={<ManageGames />}  /> */}
              </Route>
              <Route path="user" element={<UserAuth><User /></UserAuth>}>
                <Route path="profile" element={<UserProfile />} />
                <Route path="myextensions" element={<MyExtensions />} />
                <Route path="createextension" element={<ExtCreator />} />
              </Route>
              <Route path="main" element={<Main />}>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Register />} />
                <Route path="home" element={<Home />} />
              </Route>
                <Route path="preview" element={<Preview />} />
            </Routes>
          </UserProvider>
        </AdminProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
