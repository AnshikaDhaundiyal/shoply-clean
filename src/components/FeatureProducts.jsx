import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../slices/ProductSlice";
import Item from "./Item";
import { Link } from "react-router-dom";
import { Button } from "../styles/Button";
import { Box, Typography } from "@mui/material";
import { GridLoader } from "react-spinners";


const FeatureProducts = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (state) => state.productstate
  );

  const {
    user,
    loading: userLoading,
    error: userError,
  } = useSelector((state) => state.userstate);

  console.log("Redux Products:", products);
console.log("Loading:", loading);
console.log("Error:", error);


  // ✅ Fetch products when component mounts
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Wrapper>
      <div className="container">
        <h2 className="common-heading">Featured Products</h2>

        {loading ? (
          <Box
            sx={{
              minHeight: "60vh",
              display: "grid",
              placeContent: "center",
            }}
          >
            <GridLoader color="#4b3049" size={19} />
          </Box>
        ) : error ? (
          <Box>
            <Typography textAlign="center">{error}</Typography>
          </Box>
        ) : (
          <div className="grid grid-three-column">
            {products
              ?.filter((product) => product.featured === true)
              ?.slice(0, 4)
              ?.map((product) => (
                <Item
                  key={product._id}
                  name={product.name}
                  brand={product.brand}
                  countInStock={product.countInStock}
                  category={product.category}
                  _id={product._id}
                  description={product.description}
                  image={product.image}
                  price={product.price}
                />
              ))}
          </div>
        )}
      </div>

      {!loading && !error && products && (
        <Box
          sx={{
            textAlign: "center",
            mt: "40px",
          }}
        >
          <Link to="/products">
            <Button>Shop More</Button>
          </Link>
        </Box>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4rem 0 5rem;
  background-color: #f4edf2;

  .container {
    max-width: 80rem;
  }

  .common-heading {
    text-align: center;
    font-weight: bold;
    color: #4b3049;
    margin-bottom: 40px;
  }

  h3 {
    text-transform: capitalize;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }

    &:hover::after {
      width: 100%;
    }

    &:hover img {
      transform: scale(1.2);
    }

    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }
`;

export default FeatureProducts;
