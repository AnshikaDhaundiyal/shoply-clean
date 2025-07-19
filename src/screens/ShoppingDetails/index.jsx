import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 space-y-16">
      {/* 🛍️ Shopping Guide */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-indigo-600 mb-6 text-center">🛍️ Shopping Guide</h1>
        <p className="text-gray-600 text-center mb-10 text-lg">
          Here's how to shop on <span className="font-semibold text-indigo-500">ShopLy</span> in just 3 easy steps.
        </p>

        <div className="space-y-10">
          {/* Step 1 */}
          <div className="flex items-start gap-4">
            <span className="text-3xl">🛒</span>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-1">Step 1: Browse Products</h2>
              <p className="text-gray-600">
                Use our <Link to="/categories" className="text-indigo-500 underline">categories</Link>,
                <Link to="/search" className="text-indigo-500 underline ml-1">search bar</Link>,
                or <Link to="/" className="text-indigo-500 underline ml-1">homepage recommendations</Link>
                to find what you love.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-4">
            <span className="text-3xl">📦</span>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-1">Step 2: Add to Cart & Checkout</h2>
              <p className="text-gray-600">
                Click <span className="font-semibold">"Add to Cart"</span>, go to your
                <Link to="/cart" className="text-indigo-500 underline ml-1">cart</Link>, and
                <Link to="/checkout" className="text-indigo-500 underline ml-1">checkout</Link>.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-4">
            <span className="text-3xl">✅</span>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-1">Step 3: Payment & Confirmation</h2>
              <p className="text-gray-600">
                Pay securely via
                <Link to="/account/payments" className="text-indigo-500 underline ml-1">payment options</Link>.
                You'll receive order confirmation and tracking link.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition"
          >
            Start Shopping Now
          </Link>
        </div>
      </div>

      {/* 📃 Shopping Policy */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">📃 ShopLy Shopping Policy</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">1. Shopping Process</h2>
          <p className="text-gray-600">
            Browse products, add to cart, and checkout with your shipping address and payment.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">2. Order Confirmation</h2>
          <p className="text-gray-600">
            You’ll receive a confirmation email with order details and tracking.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">3. Cancellations</h2>
          <p className="text-gray-600">
            Cancel orders within 2 hours. After that, we begin processing.
          </p>
        </section>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingDetails;
