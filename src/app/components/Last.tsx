import React from 'react'
import Image from 'next/image'

const Last = () => {
  return (
    <div className='bg-[#f8f8f8]' >
        {/* last section */}
<section className="max-w-[943px] bg-[#f8f8f8] min-h-[161px] flex flex-col lg:flex-row justify-center items-center mx-auto my-6 pr-9 pb-10">
  {/* Free and Fast Delivery */}
  <div className="flex flex-col items-center text-center mx-4">
    <div className="w-24 h-24 flex items-center justify-center rounded-full bg-[#f8f8f8]bg-gray-100">
      <Image 
        src="/images/circlecar.jpg" 
        alt="Free Delivery Icon" 
        width={60} 
        height={60} 
        className="object-contain" 
      />
    </div>
    <h3 className="text-lg font-bold mt-4">FREE AND FAST DELIVERY</h3>
    <p className="text-sm text-gray-600">Free delivery for all orders over $140</p>
  </div>

  {/* 24/7 Customer Service */}
  <div className="flex flex-col items-center text-center mx-4">
    <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gray-100">
      <Image 
        src="/images/circleheadphone.jpg" 
        alt="Customer Service Icon" 
        width={60} 
        height={60} 
        className="object-contain" 
      />
    </div>
    <h3 className="text-lg font-bold mt-4">24/7 CUSTOMER SERVICE</h3>
    <p className="text-sm text-gray-600">Friendly 24/7 customer support</p>
  </div>

  {/* Money Back Guarantee */}
  <div className="flex flex-col items-center text-center mx-4">
    <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gray-100">
      <Image 
        src="/images/circleshield.jpg" 
        alt="Money Back Guarantee Icon" 
        width={60} 
        height={60} 
        className="object-contain" 
      />
    </div>
    <h3 className="text-lg font-bold mt-4">MONEY BACK GUARANTEE</h3>
    <p className="text-sm text-gray-600">We return money within 30 days</p>
  </div>
</section>
    </div>
  )
}

export default Last