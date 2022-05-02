import React, { useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import app from "../base";

function Header() {
  let navigate = useNavigate();
  const [logStatus, setLogStatus] = useState();
  const [redirect, setRedirect] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState();

  var i = 0;
  const logged = app.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log("is User");
      //return <Nav.Link href="/Store">Storeeeeee</Nav.Link>
      setIsLoggedIn(true);
      setLogStatus("Log Out");
    } else {
      console.log("is Not User");
      setIsLoggedIn(false);
      setLogStatus("Log In");
    }
  });

  function routeChange() {
    app.auth().onAuthStateChanged(async function (user) {
      if (user) {
        window.location.reload(true);
        await app.auth().signOut();
      } else {
        navigate("./MemberLogin");
        window.location.reload(true);
      }
    });
  }

  const myStyle = {
    color: "white",
    padding: "10px",
    fontFamily: "Sans-Serif",
  };

  const logo = {
    maxWidth: 100,
  };

  return (
    <>
      <div>
        <Container fluid>
          <Navbar className="colorNav">
            <Nav.Link className="navLink" href="/Store">
              <img style={logo} src="../images/logo-white.png" />
            </Nav.Link>
            <Nav>
              <Nav.Link style={myStyle} className="navLink" href="/Store">
                Store
              </Nav.Link>
              <Nav.Link style={myStyle} className="navLink" href="/Members">
                Members
              </Nav.Link>
              <Nav.Link style={myStyle} href="/About">
                About Us
              </Nav.Link>
              <Nav.Link style={myStyle} href="/Contact">
                Contact Us
              </Nav.Link>

              <p
                onClick={routeChange}
                style={{
                  color: "white",
                  padding: "10px",
                  fontFamily: "sans-serif",
                }}
              >
                {logStatus}
              </p>

              {isLoggedIn ? (
                <>
                  <Nav.Link style={myStyle} href="/MemberProfile">
                    <button> My Profile</button>
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link style={myStyle} href="/Membersignup">
                  <button> Signup</button>
                </Nav.Link>
              )}
            </Nav>
          </Navbar>
        </Container>
      </div>
    </>
  );
}

export default Header;
