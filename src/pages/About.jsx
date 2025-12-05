import React from "react";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4 text-primary">About Us</h1>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Welcome to our e-commerce platform — your trusted marketplace for
        quality products across electronics, fashion, sports, books, groceries
        and more. Our mission is to deliver the best shopping experience with
        affordable pricing, fast delivery, and reliable customer support.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
      <p className="text-gray-600 mb-4">
        To become one of the most customer-centric online shopping platforms by
        making shopping easy, safe, and enjoyable for everyone.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
      <ul className="list-disc pl-6 text-gray-600 space-y-1">
        <li>Best prices and exclusive offers</li>
        <li>Trusted quality products</li>
        <li>Fast and secure delivery options</li>
        <li>24/7 customer support</li>
      </ul>
    </div>
  );
};

export default AboutPage;
