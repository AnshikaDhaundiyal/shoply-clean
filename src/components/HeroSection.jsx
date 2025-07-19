import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../styles/Button';

const HeroSection = () => {
  return (
    <Wrapper className="bg-white dark:bg-[#0f172a] transition-colors duration-300">
      <div className="container">
        <div className="grid grid-two-column items-center">
          <div className="hero-section-data text-black dark:text-white">
            <p className="intro-data text-gray-600 dark:text-gray-400 font-semibold">Welcome to</p>
            <h1 className="text-5xl font-bold text-[#4B3049] dark:text-pink-400 mt-4">ShopLy</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 mb-4">
              Discover endless possibilities. Shop the latest trends. Find your perfect style.
              Experience seamless shopping.
            </p>
            <Link to="/products">
              <Button className="bg-[#4B3049] dark:bg-pink-600 text-white hover:opacity-90 transition duration-200">Show Now</Button>
            </Link>
          </div>

          {/* Hero Image */}
          <div className="hero-section-image mt-10 sm:mt-0">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
                alt="hero-section"
                className="rounded-md shadow-lg"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 8rem 0 5rem;

  img {
    width: 100%;
    height: auto;
  }

  .hero-section-data {
    p {
      margin: 1rem 0;
      font-weight: 500;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: #4B3049;
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
      opacity: 0.2;
    }
  }

  @media (max-width: 768px) {
    .grid {
      gap: 6rem;
      flex-direction: column;
    }

    figure::after {
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
    }
  }
`;

export default HeroSection;
