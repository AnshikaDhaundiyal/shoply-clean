import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "../axiosInstance"; // using custom axios instance



const initialState = {
  products: [],
  loading: false,
  error: false,
  filteredProducts: [],
  searchQuery: "",
  selectedCategories: [],
  priceRange: { min: 0, max: 80000 },
};

// ✅ Get All Products
export const fetchProducts = createAsyncThunk(
  "newProducts/fetchProducts",
  async () => {
    try {
      const { data } = await axios.get('/api/v1/products');
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to fetch products");
    }
  }
);

// ✅ Delete Product
export const deleteProduct = createAsyncThunk(
  "newProducts/deleteProduct",
  async ({ token, productId }) => {
    try {
      const { data } = await axios.delete(`/api/v1/products/delete/${productId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to delete product");
    }
  }
);

// ✅ Update Product
export const updateProduct = createAsyncThunk(
  "newProducts/updateProduct",
  async ({ formData, token, productId }) => {
    try {
      const { data } = await axios.put(`/api/v1/products/update/${productId}`, formData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to update product");
    }
  }
);

// ✅ Add Product
export const addProduct = createAsyncThunk(
  "newProducts/addProduct",
  async ({ formData, token }) => {
    try {
      const { data } = await axios.post('/api/v1/products/create', formData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to add product");
    }
  }
);

const productSlice = createSlice({
  name: "newProducts",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSelectedCategories: (state, action) => {
      state.selectedCategories = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    filterProducts: (state) => {
      const { searchQuery, selectedCategories, priceRange, products } = current(state);

      const filteredProducts = products.filter((product) => {
        if (
          searchQuery &&
          !product.name.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          return false;
        }
        if (
          selectedCategories.length > 0 &&
          !selectedCategories.includes(product.category)
        ) {
          return false;
        }
        if (product.price < priceRange.min || product.price > priceRange.max) {
          return false;
        }
        return true;
      });

      state.filteredProducts = filteredProducts;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.products = [];
        state.error = action.error.message;
      })

      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.products.findIndex(
          (product) => product._id === action.payload._id
        );
        state.products.splice(index, 1);
        state.filteredProducts.splice(index, 1);
       
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.products.findIndex(
          (product) => product._id === action.payload._id
        );
        state.products.splice(index, 1, action.payload);
        state.filteredProducts.splice(index, 1, action.payload);
        
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(addProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = [action.payload, ...state.products];
        state.filteredProducts = [action.payload, ...state.filteredProducts];
        
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  setSearchQuery,
  setSelectedCategories,
  setPriceRange,
  filterProducts,
} = productSlice.actions;

export default productSlice.reducer;


// import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
// import axios from "axios";
// import { filterByCategory, filterPrice, searching } from "../utils/utils";


// let allProducts = null;
// const initialState = {
//     products : [],
//     loading : false,
//     error : false,
// }

// export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
//     try {
//         let {data} = await axios(`${process.env.REACT_APP_API_URL}api/v1/products/`);
//         return data;
//     } catch (error) {
//         throw new Error(error.response.data.message)
//     }
// })

// export const deleteProduct = createAsyncThunk("products/deleteProduct", async ({token, productId}) => {
//     try {
//         let {data} = await axios.delete(`${process.env.REACT_APP_API_URL}api/v1/products/delete/${productId}`, {
//             headers : {
//                 authorization : `Bearer ${token}`
//             }
//         });
//         return data;
//     } catch (error) {
//         throw new Error(error.response.data.message)
//     }
// })

// export const updateProduct = createAsyncThunk("products/updateProduct", async ({formData, token, productId}) => {
//     try {
//         let {data} = await axios.put(`${process.env.REACT_APP_API_URL}api/v1/products/update/${productId}`, formData , {
//             headers : {
//                 authorization : `Bearer ${token}`
//             }
//         });
//         return data
//     } catch (error) {
//         throw new Error(error.response.data.message)
//     }
// })

// export const addProduct = createAsyncThunk("products/addProduct", async ({formData, token}) => {
//     try {
//         let {data} = await axios.post(`${process.env.REACT_APP_API_URL}api/v1/products/create`, formData , {
//             headers : {
//                 authorization : `Bearer ${token}`
//             }
//         });
//         return data
//     } catch (error) {
//         throw new Error(error.response.data.message)
//     }
// })



// const productSlice = createSlice({
//     name : "products",
//     initialState,
//     reducers : {
//            searchProducts : (state, action) => {
//             const result = searching(allProducts, "name", action.payload.keyword);
//             state.products = result;
//            },
//            filterByPrice : (state, action) => {
//             const result = filterPrice(allProducts, action.payload.price)
//             state.products = result;
//            },
//            filterCategory : (state, action) => {
//             const result = filterByCategory(allProducts, action.payload.categoryArray)
//             state.products = result;
//            }
//     },
//     extraReducers : {
//         [fetchProducts.pending] : (state) => {
//             state.loading = true;
//         },
//         [fetchProducts.fulfilled] : (state, action) => {
//             state.loading = false;
//             state.products = action.payload;
//             allProducts = action.payload
//         },
//         [fetchProducts.rejected] : (state, action) => {
//             state.loading = false;
//             state.products = null;
//             state.error = action.error.message;
//         },
//         [deleteProduct.pending] : (state) => {
//             state.loading = true;
//         },
//         [deleteProduct.fulfilled] : (state, action) => {
//             state.loading = false;
//             let index = state.products.findIndex(product => product._id === action.payload._id)
//             state.products.splice(index, 1)
//             allProducts = state.products;
//         },
//         [deleteProduct.rejected] : (state, action) => {
//             state.loading = false;
//             state.error = action.error.message;
//         },
//         [updateProduct.pending] : (state) => {
//             state.loading = true;
//         },
//         [updateProduct.fulfilled] : (state, action) => {
//             state.loading = false;
//             let index = state.products.findIndex(product => product._id === action.payload._id)
//             state.products.splice(index, 1, action.payload)
//             allProducts = state.products;
//         },
//         [updateProduct.rejected] : (state, action) => {
//             state.loading = false;
//             state.error = action.error.message;
//         },
//         [addProduct.pending] : (state) => {
//             state.loading = true;
//         },
//         [addProduct.fulfilled] : (state, action) => {
//             state.loading = false;
//             state.products = [action.payload, ...state.products]
//             allProducts = state.products;
//         },
//         [addProduct.rejected] : (state, action) => {
//             state.loading = false;
//             state.error = action.error.message;
//         },
//     }
// })

// export const  {searchProducts, filterByPrice, filterCategory} = productSlice.actions;

// export default productSlice.reducer;

