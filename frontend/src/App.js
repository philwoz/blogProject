import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";


import { NavBar } from './components/NavBar';

import { AllPosts } from "./components/AllPost";
import { MyPosts } from "./components/MyPosts";
import { AddPost } from "./components/AddPost";
import { RegPage } from "./components/RegPage";
import { LoginPage } from "./components/LoginPage";



function App() {
  // const [userDet, setUserDet] = React.useState(null);
  const [logOnUser, setLogOnUser] = React.useState(null);


  return (

    <div>
      <NavBar user={logOnUser} />
      <div>
        <Routes>
          <Route exact path="/allposts" element={<AllPosts logOnUser={logOnUser}/>} />
          <Route path="/mypost" element={<MyPosts />} />
          <Route path="/addpost" element={<AddPost />} />
          <Route path="/login" element={<LoginPage setLogOnUser={setLogOnUser} logOnUser={logOnUser} />}/>
          <Route path="/register" element={<RegPage />} />
        </Routes>
      </div>
    </div>
  );


}

export default App;