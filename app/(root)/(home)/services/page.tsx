"use client";
import React from 'react';

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 mt-10 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">My Services</h2>
        <p className="mt-4 text-xl text-center text-gray-600">
          I provide high-quality services to help businesses succeed. Let me assist you in building something remarkable.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl text-indigo-600 mb-4">🌐</div>
            <h3 className="text-xl font-semibold text-gray-800">Web Development</h3>
            <p className="mt-2 text-gray-600 text-center">
              I create responsive, user-friendly websites using modern technologies like React, Next.js, and TypeScript to ensure a seamless experience for your users.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl text-indigo-600 mb-4">📱</div>
            <h3 className="text-xl font-semibold text-gray-800">Mobile App Development</h3>
            <p className="mt-2 text-gray-600 text-center">
              I build cross-platform mobile applications with React Native, ensuring optimal performance on both Android and iOS devices.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl text-indigo-600 mb-4">💻</div>
            <h3 className="text-xl font-semibold text-gray-800">UI/UX Design</h3>
            <p className="mt-2 text-gray-600 text-center">
              I provide professional UI/UX design services to ensure your app or website is not only functional but visually appealing and easy to use.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl text-indigo-600 mb-4">🔧</div>
            <h3 className="text-xl font-semibold text-gray-800">Maintenance & Support</h3>
            <p className="mt-2 text-gray-600 text-center">
              I offer ongoing maintenance and support to ensure your website or app continues to run smoothly and stays up to date with the latest trends.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl text-indigo-600 mb-4">🔒</div>
            <h3 className="text-xl font-semibold text-gray-800">Security Services</h3>
            <p className="mt-2 text-gray-600 text-center">
              I help protect your business from cyber threats by implementing best security practices and ensuring the integrity of your systems.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl text-indigo-600 mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-gray-800">Performance Optimization</h3>
            <p className="mt-2 text-gray-600 text-center">
              I optimize the performance of your website or application to ensure fast loading times and improved user experience.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-md text-lg font-semibold"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
