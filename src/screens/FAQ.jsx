import React, { useState } from "react";

const faqData = [
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you will receive an email and SMS with the tracking number and a link to track your order in real-time.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept Visa, Mastercard, UPI (PhonePe, Google Pay, Paytm), Net Banking, and Cash on Delivery in selected areas.",
  },
  {
    question: "How do I return a product?",
    answer:
      "You can initiate a return within 7 days of delivery by visiting your order history and clicking 'Return'. Our delivery partner will pick it up from your doorstep.",
  },
  {
    question: "Can I cancel my order?",
    answer:
      "Yes, you can cancel your order before it is shipped. Go to your account > Orders and click 'Cancel'.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Absolutely. We use SSL encryption for all transactions and do not store your card details.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-gray-700 hover:bg-gray-100"
            >
              {item.question}
              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
