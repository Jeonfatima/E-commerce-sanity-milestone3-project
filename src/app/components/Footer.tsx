import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div >
    <footer className="bg-gray-200 text-black py-10 ">
      <div className="container mx-auto max-w-[1440px] px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {/* Exclusive Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Exclusive</h3>
          <p className="text-sm mb-4">Get 10% off your first order</p>
          <div className="flex items-center bg-gray-800 rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 text-white p-2 px-4 flex-grow outline-none"
            />
            <button className=" p-2 px-4 text-sm rounded-full">➤</button>
          </div>
        </div>
  
        {/* Support Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Support</h3>
          <p className="text-sm">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="text-sm mt-2">exclusive@gmail.com</p>
          <p className="text-sm mt-2">+88015-88888-9999</p>
        </div>
  
        {/* Account Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Account</h3>
          <ul className="space-y-2 text-sm">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>
  
        {/* Quick Link Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Link</h3>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
  
        {/* Download App Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Download App</h3>
          <p className="text-sm mb-4">Save $3 with App New User Only</p>
          <div className="flex space-x-2 mb-4">
            {/* QR Code */}
            <Image
              src="/images/qrcode.jpg"
              alt="QR Code"
              width={80}
              height={80}
              className="object-contain"
            />
            <div className="space-y-2">
              <Image
                src="/images/googleplay.jpg"
                alt="Google Play"
                width={120}
                height={40}
                className="object-contain"
              />
              <Image
                src="/images/appstore.jpg"
                alt="App Store"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex space-x-4 text-xl">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-500">
        © Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  </div>
  
  )
}

export default Footer