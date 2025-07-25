import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare
} from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import { Box, Container, Row, Column, Heading } from "./FooterStyles.js";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="#795376"
      sx={{
        display: "flex",
        padding: "15px",
        fontWeight: "400",
        fontSize: "15px",
        lineHeight: "2",
        fontFamily: "Rubik",
        justifyContent: "center"
      }}
    >
      {"Copyright © "}
      2023 Yuvi
    </Typography>
  );
}

const linkStyle = {
  color: "#fff",
  marginBottom: "12px",
  fontSize: "16px",
  textDecoration: "none"
};

const Footer = () => {
  return (
    <>
      <Box>
        <Container>
          <Row>
            {/* Branding */}
            <Column>
              <h1 style={{ color: "#fff", fontSize: "34px", fontWeight: "bold" }}>
                ShopLy
              </h1>
            </Column>

            {/* Quick Links */}
            <Column>
              <Heading>Quick Links</Heading>
              <Link to="/about" style={linkStyle}>About Us</Link>
              <Link to="/" style={linkStyle}>Home</Link>
              <Link to="/cart" style={linkStyle}>Cart</Link>
              <Link to="/terms" style={linkStyle}>Terms & Conditions</Link>
            </Column>

            {/* Products */}
            <Column>
              <Heading>Products</Heading>
              <Link to="/products?category=phones" style={linkStyle}>Phones</Link>
              <Link to="/products?category=watches" style={linkStyle}>Watches</Link>
              <Link to="/products?category=laptops" style={linkStyle}>Laptops</Link>
              <Link to="/products?category=cameras" style={linkStyle}>Cameras</Link>
            </Column>

            {/* Help */}
          <Column>
  <Heading>Help</Heading>
  <Link to="/account/payments" style={linkStyle}>Payments</Link>
  <Link to="/shipping" style={linkStyle}>Shipping</Link>
  <Link to="/shopping-details" style={linkStyle}>Shopping Details</Link>

  <Link to="/faq" style={linkStyle}>FAQ</Link>
</Column>

          

            {/* Guarantees */}
            <Column>
              <div style={{ marginTop: "8px" }}>
                <p style={{ color: "#fff", display: "flex", fontWeight: "bold" }}>
                  <img
                    src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
                    style={{ width: "48px", height: "40px", marginRight: "10px" }}
                    alt="original"
                  />
                  100% ORIGINAL guarantee for all products
                </p>
                <p style={{ color: "#fff", display: "flex", fontWeight: "bold" }}>
                  <img
                    src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png"
                    style={{ width: "48px", height: "40px", marginRight: "10px" }}
                    alt="return"
                  />
                  Return within 30 days of receiving your order
                </p>
              </div>
            </Column>

            {/* Socials */}
            <Column style={{ display: "flex", flexDirection: "column" }}>
              <Heading>Connect</Heading>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                <FaFacebookSquare style={{ marginRight: "15px", fontSize: "24px" }} />
                Facebook
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                <FaInstagramSquare style={{ marginRight: "15px", fontSize: "24px" }} />
                Instagram
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                <FaTwitterSquare style={{ marginRight: "15px", fontSize: "24px" }} />
                Twitter
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                <FaYoutubeSquare style={{ marginRight: "15px", fontSize: "24px" }} />
                YouTube
              </a>
            </Column>
          </Row>
        </Container>

        {/* Footer Copyright */}
        <div
          style={{
            backgroundColor: "#F4EDF2",
            paddingLeft: "30px",
            paddingRight: "30px",
            textAlign: "center"
          }}
        >
          <Copyright />
        </div>
      </Box>
    </>
  );
};

export default Footer;
