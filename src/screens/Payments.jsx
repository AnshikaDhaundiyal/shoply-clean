import React from "react";
import { FaCcVisa, FaCcMastercard, FaGooglePay, FaPhoneAlt } from "react-icons/fa";
import { SiPaytm, SiNetlify } from "react-icons/si";
import { MdOutlineSecurity } from "react-icons/md";
import { toast } from "react-toastify";

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

      <div className="bg-gray-50 border rounded-lg p-6">
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
