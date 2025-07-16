import React from "react";
import styled from "styled-components";

const TermsAndConditions = () => {
  return (
    <Wrapper>
      <div className="terms-container">
        <h1>Terms and Conditions</h1>
        <p className="last-updated">Last Updated: July 15, 2025</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            These Terms and Conditions (“Terms”) govern your use of Shoply. By
            accessing our website, you agree to comply with and be bound by
            these Terms.
          </p>
        </section>

        <section>
          <h2>2. User Responsibilities</h2>
          <p>
            You agree to use our website for lawful purposes only. You must not
            misuse the site by knowingly introducing viruses or other malicious
            material.
          </p>
        </section>

        <section>
          <h2>3. Product Information</h2>
          <p>
            We aim to ensure all information on our platform is accurate. In
            case of any discrepancies, we reserve the right to correct errors
            without prior notice.
          </p>
        </section>

        <section>
          <h2>4. Pricing & Availability</h2>
          <p>
            Prices and availability of products may change without notice. All
            prices are inclusive of applicable taxes.
          </p>
        </section>

        <section>
          <h2>5. Privacy</h2>
          <p>
            Your personal information is handled in accordance with our{" "}
            <a href="/privacy">Privacy Policy</a>.
          </p>
        </section>

        <section>
          <h2>6. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to Shoply
            at any time without notice if you violate our Terms.
          </p>
        </section>

        <section>
          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a href="mailto:support@shoply.com">support@shoply.com</a>.
          </p>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  padding: 60px 20px;
  background-color: #f9f9f9;

  .terms-container {
    max-width: 800px;
    margin: 0 auto;
    background: #fff;
    padding: 40px 30px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    line-height: 1.7;
    color: #1d1d1f;
  }

  h1 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .last-updated {
    color: #888;
    font-size: 14px;
    margin-bottom: 30px;
  }

  h2 {
    font-size: 22px;
    margin-top: 30px;
    font-weight: 500;
  }

  p {
    font-size: 16px;
    margin-top: 10px;
  }

  a {
    color: #0071e3;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    .terms-container {
      padding: 25px 20px;
    }

    h1 {
      font-size: 26px;
    }

    h2 {
      font-size: 18px;
    }

    p {
      font-size: 15px;
    }
  }
`;

export default TermsAndConditions;
