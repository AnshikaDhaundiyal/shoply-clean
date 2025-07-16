import React from "react";
import styled from "styled-components";

const TermsAndConditions = () => {
  return (
    <Wrapper>
      <h1>Terms and Conditions</h1>
      <p>Last updated: July 15, 2025</p>

      <h2>1. Introduction</h2>
      <p>
        Welcome to Shoply. By accessing or using our website, you agree to be
        bound by these Terms and Conditions. If you disagree with any part of
        the terms, please do not use our service.
      </p>

      <h2>2. Use of the Website</h2>
      <p>
        You may use this website for personal, non-commercial use only. Any
        misuse, including hacking, spamming, or tampering with the website is
        strictly prohibited.
      </p>

      <h2>3. Products and Pricing</h2>
      <p>
        We try to ensure all product information and pricing are accurate, but
        errors may occur. We reserve the right to correct any errors and update
        product details without prior notice.
      </p>

      <h2>4. Account Information</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account
        and password and for all activities that occur under your account.
      </p>

      <h2>5. Privacy</h2>
      <p>
        Your privacy is important to us. Please read our Privacy Policy to
        understand how we collect, use, and protect your information.
      </p>

      <h2>6. Changes to Terms</h2>
      <p>
        We may update our Terms and Conditions from time to time. Changes will
        be posted on this page with a new effective date.
      </p>

      <h2>7. Contact Us</h2>
      <p>If you have any questions, contact us at support@shoply.com.</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 3rem;
  max-width: 800px;
  margin: auto;
  font-family: Arial, sans-serif;
  color: #333;
  line-height: 1.6;

  h1, h2 {
    color: #4b3049;
  }
`;

export default TermsAndConditions;
