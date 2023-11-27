import React from 'react'
import { CiDeliveryTruck, CiDollar, CiRepeat } from "react-icons/ci";
import { AiOutlineSafety } from "react-icons/ai";

const Services = () => {
  return (
    <main className='w-full h-32 p-5'>
        <div className="grid grid-cols-2 lg:grid-cols-4 place-content-center gap-8 p-5 rounded-2xl bg-[#212529]">
            <span className='flex flex-col justify-center items-center'><CiDeliveryTruck size={45} /> <p className='text-sm'>Free Shipping & Return</p></span>
            <span className='flex flex-col justify-center items-center'><CiDollar size={45} /> <p className='text-sm'>Free Shipping & Return</p></span>
            <span className='flex flex-col justify-center items-center'><CiRepeat size={45} /> <p className='text-sm'>Free Shipping & Return</p></span>
            <span className='flex flex-col justify-center items-center'><AiOutlineSafety size={45} /> <p className='text-sm'>Free Shipping & Return</p></span>
        </div>
    </main>
  )
}

export default Services