import React from "react";
import { FaCcVisa, FaCcMastercard, FaGooglePay, FaPhoneAlt } from "react-icons/fa";
import { SiPaytm, SiNetlify } from "react-icons/si";
import { MdOutlineSecurity } from "react-icons/md";
import { toast } from "react-toastify";
import axios from "axios";

// Load Razorpay script dynamically
const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

// Trigger payment popup
const makePayment = async () => {
  const res = await loadRazorpayScript();
  if (!res) {
    toast.error("Razorpay SDK failed to load. Please check your connection.");
    return;
  }

  try {
    const result = await axios.post("http://localhost:5000/api/razorpay/create-order", {
      amount: 500, // ₹5.00 for test
    });

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_test_YourKeyHere", // 🔑 Replace with your Razorpay Test Key
      amount,
      currency,
      name: "ShopLy",
      description: "Test Transaction",
      order_id,
      handler: function (response) {
        toast.success("✅ Payment Successful!");
        console.log("Razorpay Response:", response);
      },
      prefill: {
        name: "Anshika",
        email: "anshika@example.com",
        contact: "9999999999",
      },
      theme: { color: "#6366f1" },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  } catch (error) {
    console.error("Payment Error:", error);
    toast.error("Payment failed. Please try again.");
  }
};

// Dummy payment options for UI
const paymentMethods = [
  {
    name: "Visa",
    icon: <FaCcVisa className="text-blue-700 text-3xl" />,
    onClick: () => toast.info("Redirecting to Visa payment..."),
  },
  {
    name: "Mastercard",
    icon: <FaCcMastercard className="text-red-600 text-3xl" />,
    onClick: () => toast.info("Redirecting to Mastercard..."),
  },
  {
    name: "Google Pay",
    icon: <FaGooglePay className="text-black text-3xl" />,
    onClick: () => toast.info("Opening Google Pay..."),
  },
  {
    name: "PhonePe",
    icon: <FaPhoneAlt className="text-purple-700 text-2xl" />,
    onClick: () => toast.info("Opening PhonePe..."),
  },
  {
    name: "Paytm",
    icon: <SiPaytm className="text-blue-500 text-2xl" />,
    onClick: () => toast.info("Opening Paytm..."),
  },
  {
    name: "Net Banking",
    icon: <SiNetlify className="text-green-600 text-2xl" />,
    onClick: () => toast.info("Redirecting to Net Banking..."),
  },
];

const Payment = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Payment Options</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
        {paymentMethods.map((method, index) => (
          <button
            key={index}
            onClick={method.onClick}
            className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow hover:shadow-md hover:border-indigo-500 p-4 transition"
          >
            {method.icon}
            <span className="mt-2 text-sm font-medium text-gray-700">{method.name}</span>
          </button>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={makePayment}
          className="bg-indigo-600 text-white px-6 py-2 rounded shadow hover:bg-indigo-700"
        >
          Pay ₹5 with Razorpay
        </button>
      </div>

      <div className="bg-gray-50 border rounded-lg p-6 mt-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">🔒 Payment Security</h2>
        <p className="text-gray-600 mb-2">
          All transactions are protected by <strong>SSL encryption</strong>.
        </p>
        <p className="text-gray-600 mb-2">
          We do not store your card details. Your data is safe and secure with us.
        </p>
        <p className="text-gray-600 flex items-center gap-2 mt-2">
          <MdOutlineSecurity className="text-green-600 text-xl" />
          PCI-DSS Compliant Checkout
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">❓ Need Help?</h2>
        <p className="text-gray-600 mb-1">
          Facing issues with your payment? Our support team is available 24/7.
        </p>
        <a
          href="/support"
          className="text-indigo-600 hover:underline font-medium inline-block mt-2"
        >
          Contact Support →
        </a>
      </div>
    </div>
  );
};

export default Payment;
