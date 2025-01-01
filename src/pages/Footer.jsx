import React from 'react'

const Footer = () => {
  return (
    <div>
          <footer className="  bg-gray-50 px-4 sm:px-10 py-12 ">
    <div className="md:max-w-[50%] mx-auto text-center">
      <div className="bg-[#fff] border flex px-2 py-1 rounded-full text-left mt-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full outline-none bg-transparent pl-4"
        />
        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-2.5 transition-all"
        >
          Subscribe
        </button>
      </div>
    </div>
    <div className="grid max-sm:grid-cols-1 max-xl:grid-cols-2 xl:grid-cols-5 gap-8 border-t border-gray-300 mt-10 pt-8">
      <div className="xl:col-span-2">
        <h4 className="text-xl font-semibold mb-6">ShopStyle</h4>
        <p className="mb-2">
        Your destination for trendy and affordable fashion.
        </p>
      </div>
      <div>
        <h4 className="text-xl font-semibold mb-6">Customer Service</h4>
        <ul className="space-y-4">
          <li>
            <a href="javascript:void(0)" className="hover:text-blue-600">
            Track Order            </a>
          </li>
          <li>
            <a href="javascript:void(0)" className="hover:text-blue-600">
            Size Guide            </a>
          </li>
          <li>
            <a href="javascript:void(0)" className="hover:text-blue-600">
            Gift Cards            </a>
          </li>
          <li>
            <a href="javascript:void(0)" className="hover:text-blue-600">
            Student Discount            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
        <ul className="space-y-4">
          <li>
            <a href="javascript:void(0)" className="hover:text-blue-600">
            About Us
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" className="hover:text-blue-600">
            Contact
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" className="hover:text-blue-600">
            FAQs
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" className="hover:text-blue-600">
            Shipping
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" className="hover:text-blue-600">
            Returns
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-xl font-semibold mb-4">About Us</h4>
        <ul className="space-y-4">
          <li>
            <a href="javascript:void(0)" className="hover:text-blue-600">
              Our Story
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" className="hover:text-blue-600">
              Mission and Values
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" className="hover:text-blue-600">
              Team
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" className="hover:text-blue-600">
              Testimonials
            </a>
          </li>
        </ul>
      </div>
    </div>
    <p>© 2024 ShopStyle. All rights reserved.</p>

  </footer>
    </div>
  )
}

export default Footer