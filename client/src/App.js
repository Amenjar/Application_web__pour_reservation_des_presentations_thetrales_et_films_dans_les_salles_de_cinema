//import { useEffect } from 'react';
//import { useDispatch } from 'react-redux';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

import NavBare from "./components/NavBare";
import PrivateRoute from "./components/Private/PrivateRoute";
import Profile from "./components/Profile";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AddUserApp from "./components/userApp/Adduserapp";
import PrivateRouteAdmin from "./components/Private/PrivateRouteAdmin";
import ProfileAdmin from "./components/ProfileAdmin";
import TableofUser from "./components/userApp/List";
import AddSalle from "./components/SalleCinema/AddSalle";
import ListOfSalle from "./components/SalleCinema/ListOfSalle";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCurrent } from "./redux/actions/authAction";
import ListOfPub from "./components/Publication/ListOfPub";

import PrivateRouteUserapp from "./components/Private/PrivateRouteUserapp";
import ProfileUserApp from "./components/ProfileUserApp";
import InSalle from "./components/SalleCinema/InSalle";
import TableofReservationUserApp from "./components/Publication/Reservation/ListOfReservation";
import TableofReservationUser from "./components/Publication/Reservation/ListOfReservationUser";
import TableofPublication from "./components/Publication/ListOfPubAdmin";

//import { getCurrent } from './redux/actions/authAction';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);
  const [search, setSearch] = useState("");

  return (
    <div style={{ margin: "0px" }}>
      <NavBare search={search} setSearch={setSearch}></NavBare>

      <Routes>
        <Route path="/" element={<Home search={search}></Home>} />

        <Route path="/signIn" element={<SignIn></SignIn>} />
        <Route path="/signUp" element={<SignUp></SignUp>} />

        <Route
          path="/Profile"
          element={
            <PrivateRoute>
              <Profile search={search}></Profile>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/ProfileAdmin"
          element={
            <PrivateRouteAdmin>
              <ProfileAdmin></ProfileAdmin>
            </PrivateRouteAdmin>
          }
        />
        <Route
          path="/ProfileUserApp"
          element={
            <PrivateRouteUserapp>
              <ProfileUserApp></ProfileUserApp>
            </PrivateRouteUserapp>
          }
        />
        <Route
          path="/ProfileAdmin/addUserApp"
          element={<AddUserApp></AddUserApp>}
        />
        <Route
          path="/ProfileAdmin/Publication"
          element={<TableofPublication></TableofPublication>}
        />
        <Route
          path="/ProfileAdmin/userApp"
          element={<TableofUser></TableofUser>}
        />
        <Route path="/ProfileAdmin/addSalle" element={<AddSalle></AddSalle>} />
        <Route
          path="/ProfileAdmin/Salle"
          element={<ListOfSalle></ListOfSalle>}
        />
        <Route
          path="/ProfileUserApp/Publication"
          element={<ListOfPub></ListOfPub>}
        />
        <Route
          path="/ProfileUserApp/Reservation"
          element={<TableofReservationUserApp></TableofReservationUserApp>}
        />
        <Route
          path="/Profile/salle/:id"
          element={<InSalle search={search}></InSalle>}
        />
        <Route
          path="/Profile/Reservation"
          element={<TableofReservationUser></TableofReservationUser>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
