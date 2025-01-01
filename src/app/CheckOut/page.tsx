import React from 'react'


const page = () => {
  return (
    <div className="mx-auto max-w-[1440px] p-6 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8">


    {/* Left Section - Billing Details Form */}
    <div className='lg:max-w-[608px] m-[10%]'>
      <h2 className="text-3xl font-semibold mb-6">Billing details</h2>
      <form className="space-y-6">
        {/* Name Fields - Side-by-Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className='text-3xl font-bold'>
            <label htmlFor="firstName" className="block text-xl font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-xl font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        </div>

        {/* Other Fields - Full Width */}
        <div className='text-xl'>
          <label htmlFor="companyName" className="block text-xl font-medium text-gray-700">
            Company Name (Optional)
          </label>
          <input
            type="text"
            id="companyName"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-xl font-medium text-gray-700">
            Country / Region
          </label>
          <select
            id="country"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option>Sri Lanka</option>
          </select>
        </div>

        <div>
          <label htmlFor="streetAddress" className="block text-xl font-medium text-gray-700">
            Street Address
          </label>
          <input
            type="text"
            id="streetAddress"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="House number and street name"
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-xl font-medium text-gray-700">
            Town / City
          </label>
          <input
            type="text"
            id="city"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div>
          <label htmlFor="province" className="block text-xl font-medium text-gray-700">
            Province
          </label>
          <select
            id="province"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option>Western Province</option>
          </select>
        </div>

        <div>
          <label htmlFor="zip" className="block text-xl font-medium text-gray-700">
            ZIP Code
          </label>
          <input
            type="text"
            id="zip"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xl font-medium text-gray-700">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xl font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div>
          <label htmlFor="additionalInfo" className="block text-sxl font-medium text-gray-700">
            Additional Information
          </label>
          <textarea
            id="additionalInfo"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            rows={4}
          />
        </div>
      </form>
    </div>

    {/* Right Section - Order Summary */}
    <div className=" p-6 rounded-md self-start m-[10%]">
      <h2 className="text-2xl font-semibold mb-6">Product</h2>
      <div className="border-b pb-4 mb-4">
        <div className="flex justify-between text-sm">
          <span>Algebra Sofa x 1</span>
          <span>Rs. 250,000.00</span>
        </div>
      </div>
      <div className="text-sm border-b pb-4 mb-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>Rs. 250,000.00</span>
        </div>
        <div className="flex justify-between font-semibold text-lg pt-6">
          <span >Total</span>
          <span className='text-xl text-yellow-600 font-bold'>Rs. 250,000.00</span>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Payment Method
        </label>
        <div className="space-y-2">
          <div>
            <input
              type="radio"
              id="bankTransfer"
              name="paymentMethod"
              className="mr-2"
              defaultChecked
            />
            <label htmlFor="bankTransfer" className="text-sm text-gray-700">
              Direct Bank Transfer
            </label>
            <p className="text-xs text-gray-500 mt-1">
              Make your payment directly into our bank account. Please use your Order ID as the
              payment reference.
            </p>
          </div>
          <div>
            <input
              type="radio"
              id="cashOnDelivery"
              name="paymentMethod"
              className="mr-2"
            />
            <label htmlFor="cashOnDelivery" className="text-sm text-gray-700">
              Cash on Delivery
            </label>
          </div>
        </div>
      </div>
      <button className="checkout-btn">
        Place order
      </button>
    </div>

    
    


  </div>
  )
}

export default page