import React from 'react';
import { Link } from 'react-router-dom';

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold text-indigo-600 mb-6 text-center">🚚 Shipping Policy</h1>
        <p className="text-gray-700 text-lg text-center mb-8">
          We are committed to delivering your orders safely and on time.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">📦 Shipping Methods</h2>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>Standard Delivery: <span className="font-medium">5–7 business days</span></li>
            <li>Express Delivery: <span className="font-medium">2–3 business days</span></li>
            <li>Same-Day Delivery: <span className="font-medium">Available in select cities</span></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">📍 Delivery Partners</h2>
          <p className="text-gray-600">
            We partner with reliable logistics services such as <span className="font-medium">Bluedart</span>, 
            <span className="font-medium"> Delhivery</span>, and <span className="font-medium">India Post</span> 
            to ensure safe delivery.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">📦 Order Tracking</h2>
          <p className="text-gray-600">
            Once your order is shipped, you will receive a tracking link via 
            <span className="font-medium"> email or SMS</span>. 
            You can also visit the 
            <Link to="/track-order" className="text-indigo-500 underline ml-1">Track My Order</Link> page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">❗ Delivery Delays</h2>
          <p className="text-gray-600">
            Some delays may occur during peak seasons or due to weather conditions. 
            We’ll notify you via your contact information if your order is affected.
          </p>
        </section>

        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            📩 Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
