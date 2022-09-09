import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

import IconButton from "@mui/material/IconButton";

import SearchIcon from "@mui/icons-material/Search";

import Typography from "@mui/material/Typography";

import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCurrent, logout } from "../redux/actions/authAction";
import { useDispatch } from "react-redux";
import logo from "./logo.png";
import { getuserApp } from "../redux/actions/authAction";
import { getSalle } from "../redux/actions/salleAction";
import { getpublication } from "../redux/actions/pubAction";

export default function SearchAppBar({ search, setSearch }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.AuthReducer.user);
  const token = localStorage.getItem("token");
  const Navigate = useNavigate();
  React.useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#001f3f" }}>
        {user && token && user.role === "admin" ? (
          <Toolbar style={{ height: "40px" }}>
            <div>
              <Link to="/ProfileAdmin">
                {" "}
                <img style={{ width: "120px" }} src={logo} alt="logo" />
              </Link>
            </div>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            ></Typography>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Link to="/ProfileAdmin/Publication">
                <Button style={{ color: "white" }}>Publication</Button>
              </Link>
              <Link to="/ProfileAdmin/userApp">
                {" "}
                <Button
                  style={{ color: "white" }}
                  onClick={() => dispatch(getuserApp(Navigate))}
                >
                  UserApp
                </Button>
              </Link>
              <Link to="/ProfileAdmin/addUserApp">
                <Button style={{ color: "white" }}>Add UserApp</Button>
              </Link>
              <Link to="/ProfileAdmin/addSalle">
                {" "}
                <Button style={{ color: "white" }}>Add SalleCinema</Button>
              </Link>
              <Link to="/ProfileAdmin/Salle">
                {" "}
                <Button
                  style={{ color: "white" }}
                  onClick={() => dispatch(getSalle(Navigate))}
                >
                  SalleCinema
                </Button>
              </Link>
              <Button
                style={{ color: "white" }}
                onClick={() => dispatch(logout(Navigate))}
              >
                logout
              </Button>
            </div>
          </Toolbar>
        ) : user && token && user.role === "user" ? (
          <Toolbar style={{ height: "40px" }}>
            <div>
              <Link to="/Profile">
                <img style={{ width: "120px" }} src={logo} alt="logo" />
              </Link>
            </div>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            ></Typography>

            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Link to="/Profile/Reservation">
                <Button style={{ color: "white" }}>Reservations</Button>
              </Link>
              <Button
                style={{ color: "white" }}
                onClick={() => dispatch(logout(Navigate))}
              >
                logout
              </Button>
            </div>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 200,
              }}
              style={{ marginLeft: "15px" }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Toolbar>
        ) : user && token && user.role === "userApp" ? (
          <Toolbar style={{ height: "40px" }}>
            <div>
              <Link to="/ProfileUserApp">
                {" "}
                <img style={{ width: "120px" }} src={logo} alt="logo" />
              </Link>
            </div>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            ></Typography>

            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Link to="/ProfileUserApp/Publication">
                  <Button
                    style={{ color: "white" }}
                    onClick={() => dispatch(getpublication())}
                  >
                    Posts
                  </Button>
                </Link>

                <Button
                  style={{ color: "white" }}
                  onClick={() => dispatch(logout(Navigate))}
                >
                  logout
                </Button>
              </div>
            </div>
          </Toolbar>
        ) : (
          <Toolbar style={{ height: "40px" }}>
            <div>
              <Link to="/">
                {" "}
                <img style={{ width: "120px" }} src={logo} alt="logo" />
              </Link>
            </div>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            ></Typography>

            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: "5px",
                }}
              >
                <Link to="/signIn">
                  {" "}
                  <Button style={{ color: "white" }}>Login</Button>
                </Link>
                <Link to="/SignUp">
                  {" "}
                  <Button style={{ color: "white" }}>Sign Up</Button>
                </Link>
              </div>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 200,
                }}
                style={{ marginLeft: "15px", marginBottom: "8px" }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search "
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                />
                <IconButton
                  type="submit"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </div>
          </Toolbar>
        )}
      </AppBar>
    </Box>
  );
}
