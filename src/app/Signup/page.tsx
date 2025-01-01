import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className="container mb-3">
      <div className="max-w-[1440px] min-h-screen flex flex-col items-center py-6">
        {/* Main container */}
        <div className="w-full flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 lg:gap-[80px] px-4 py-4">
          {/* Image Section */}
          <div className="flex-1 max-w-full lg:max-w-[50%] flex justify-center">
            <Image
              src="/images/signup.jpg"
              alt="Signup Illustration"
              width={805}
              height={781}
              className="object-contain max-w-full"
              priority
            />
          </div>

          {/* Sign-up Form Section */}
          <div className="w-full max-w-md p-6 bg-white rounded-lg">
            <h1 className="text-2xl font-bold text-black mb-4">Create an account</h1>
            <p className="text-sm text-gray-600 mb-6">Enter your details below</p>

            {/* Input Fields */}
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email or Phone Number"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Create Account Button */}
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className="my-4 flex items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-2 text-sm text-gray-500">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Sign Up with Google */}
            <button
              type="button"
              className="w-full py-3 border rounded-md flex items-center justify-center space-x-2 hover:bg-gray-100 transition"
            >
              <Image
                src="/images/Icon-Google.jpg"
                alt="Google Icon"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span className="text-gray-600 font-medium">Sign up with Google</span>
            </button>

            {/* Footer */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <a href="/Login" className="hover:underline">
                  Log in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
