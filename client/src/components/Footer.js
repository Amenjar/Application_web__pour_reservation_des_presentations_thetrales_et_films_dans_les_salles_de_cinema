import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "./logo.png";
import "./Footer.css";
import { Link } from "@mui/material";
function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      style={{ color: "white" }}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://www.linkedin.com/in/amen-jaafer-733463220/"
        style={{ textDecoration: "none" }}
      >
        Amen_Jar
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer(props) {
  const { description, title } = props;

  return (
    <Box
      component="footer"
      sx={{ bgcolor: "background.paper", py: 6 }}
      style={{
        boxShadow: "12px 12px 12px 12px rgba(16, 16, 24, 0.08)",
        backgroundColor: "#001f3f",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{
                width: "120px",
              }}
              src={logo}
              alt="logo"
            />
            <div style={{ display: "flex", marginLeft: "15px" }}>
              <p
                style={{
                  color: "white",
                  marginRight: "15px",
                }}
              >
                suivez-nous
              </p>
              <a
                href="https://www.facebook.com/"
                style={{
                  textDecoration: "none",
                }}
              >
                <FacebookIcon style={{ marginTop: "18px", color: "white" }} />
              </a>
              <a
                href="https://www.instagram.com/"
                style={{
                  textDecoration: "none",
                }}
              >
                <InstagramIcon
                  style={{
                    marginTop: "18px",
                    marginLeft: "8px",
                    color: "white",
                  }}
                />
              </a>
              <a
                href="https://www.linkedin.com/"
                style={{
                  textDecoration: "none",
                }}
              >
                <LinkedInIcon
                  style={{
                    marginTop: "18px",
                    marginLeft: "8px",
                    color: "white",
                  }}
                />
              </a>
              <nav>
                <ul style={{ display: "flex", marginLeft: "450px" }}>
                  <li
                    style={{
                      marginRight: "18px",
                      listStyle: "none",
                      textAlign: "center",
                    }}
                  >
                    <a href="/">Home</a>
                  </li>
                  <li
                    style={{
                      marginRight: "18px",
                      listStyle: "none",
                      textAlign: "center",
                    }}
                  >
                    <a href="/">Service</a>
                  </li>
                  <li
                    style={{
                      marginRight: "18px",
                      listStyle: "none",
                      textAlign: "center",
                    }}
                  >
                    <a href="/signUp">Contact Us</a>
                  </li>
                  <li
                    style={{
                      marginRight: "18px",
                      listStyle: "none",
                      textAlign: "center",
                    }}
                  >
                    <a href="/">Rental terms</a>
                  </li>
                  <li
                    style={{
                      marginRight: "18px",
                      listStyle: "none",
                      textAlign: "center",
                    }}
                  >
                    <a href="/">Site map</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </Typography>
        <div style={{ marginTop: "15px", marginRight: "90px" }}>
          <Copyright />
        </div>
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
