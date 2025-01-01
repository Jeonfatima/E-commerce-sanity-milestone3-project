import React from 'react'
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbDeviceWatchStats } from "react-icons/tb";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { PiHeadphonesThin } from "react-icons/pi";
import { TbDeviceGamepad } from "react-icons/tb";
import { TbRectangleVerticalFilled } from "react-icons/tb";

const Category = () => {
  return (
    <div className='container'>
     
<section className="px-6 py-12">
  {/* Section Header */}
  <h2 className="font-bold text-blue-600 mb-6">
    <div className="flex items-center">
      <TbRectangleVerticalFilled className="text-blue-600 mr-2 size-10" />
      <span>Categories</span>
    </div>
    <div className="text-black text-4xl p-1 mt-2">Browse by Category</div>
  </h2>

  {/* Category Cards */}
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-10">
    {/* Phones */}
    <div className="text-center border rounded-lg cursor-pointer flex flex-col items-center justify-center h-[145px] text-lg hover:bg-blue-400 hover:text-white transition-all">
      <CiMobile4 className="text-5xl text-black mb-2" />
      <p className="mt-2">Phones</p>
    </div>

    {/* Computers */}
    <div className="text-center border rounded-lg cursor-pointer flex flex-col items-center justify-center h-[145px] text-lg hover:bg-blue-400 hover:text-white transition-all">
      <HiOutlineComputerDesktop className="text-5xl text-black mb-2" />
      <p className="mt-2">Computers</p>
    </div>

    {/* Smart Watches */}
    <div className="text-center border rounded-lg cursor-pointer flex flex-col items-center justify-center h-[145px] text-lg hover:bg-blue-400 hover:text-white transition-all">
      <TbDeviceWatchStats className="text-5xl text-black mb-2" />
      <p className="mt-2">Smart Watch</p>
    </div>

    {/* Cameras */}
    <div className="text-center border rounded-lg cursor-pointer flex flex-col items-center justify-center h-[145px] text-lg hover:bg-blue-400 hover:text-white transition-all">
      <MdOutlinePhotoCamera className="text-5xl text-black mb-2" />
      <p className="mt-2">Cameras</p>
    </div>

    {/* Headphones */}
    <div className="text-center border rounded-lg cursor-pointer flex flex-col items-center justify-center h-[145px] text-lg hover:bg-blue-400 hover:text-white transition-all">
      <PiHeadphonesThin className="text-5xl text-black mb-2" />
      <p className="mt-2">Headphones</p>
    </div>

    {/* Gaming */}
    <div className="text-center border rounded-lg cursor-pointer flex flex-col items-center justify-center h-[145px] text-lg hover:bg-blue-400 hover:text-white transition-all">
      <TbDeviceGamepad className="text-5xl text-black mb-2" />
      <p className="mt-2">Gaming</p>
    </div>
  </div>
</section>
    </div>
  )
}

export default Category