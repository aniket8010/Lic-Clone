import React, { useState } from 'react'
import { FaMicrophone } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


const HeaderTop = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("")

    const handleChange = (event) => {
        setSelectedLanguage(event.target.value)
    }
    return (
        <div className='flex gap-2 my-3'>
            <div className='flex items-center'>
                <img className='h-[100%] w-[100%] mx-2' src="https://licindia.in/o/lic-theme/images/BBBP.jpg" alt="" />
                <img className='h-[100%] border-r-2 border-gray-400 pr-1' src="https://licindia.in/o/lic-theme/images/glass.png" alt="" />
            </div>
            <div className='flex text-[#00417C]'>
                <input className="w-40 h-9 border border-gray-300 rounded-l-3xl px-3 py-2 items-center focus:border-custom-focus focus:ring focus:ring-custom-focus focus:ring-opacity-50 focus:outline-none"
                    type="text" placeholder='Search' />
                <div className='items-center justify-center pt-2 pb-0 px-[10px] border-t-2 border-b-2 h-[86%] hover:bg-[#FFCA08] cursor-pointer'>
                    <FaMicrophone />
                </div>
                <div className='px-[10px] items-center justify-center p-2 border-2 h-[86%] rounded-r-md hover:bg-[#FFCA08] cursor-pointer'>
                    <FaSearch />
                </div>
            </div>
            <div className='border-x-2 flex  items-center'>
                <h6 className='text-xs px-1'>Skip to main content</h6>
            </div>
            <div className='flex  items-center gap-1'>
                <img className='h-[50%]' src="https://licindia.in/o/lic-theme/images/whatsapp.svg" alt="" />
                <h6 className='h-[50%] text-xs'>8976862090</h6>
            </div>
            <div className='flex  items-center gap-1 border-x-2'>
                <img className='h-[50%]' src="https://licindia.in/o/lic-theme/images/phone-1.svg" alt="" />
                <h6 className='h-[50%] text-xs'>+91-22-68276827</h6>
            </div>
            <div className='flex items-center gap-1'>
                <img className='h-[50%]' src="https://licindia.in/o/lic-theme/images/map-ico.svg" alt="" />
                <h6 className='h-[50%] text-xs'>Branch Locator</h6>
            </div>
            <div className='flex  items-center gap-1 border-x-2 px-2'>
                <select value={selectedLanguage} onChange={handleChange} className='focus:outline-none text-xs'>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                    <option value="Chinese">Chinese</option>
                </select>
            </div>
            <div className='flex items-center rounded-full px-[11px] bg-[#D9E3EB]'>
                <img src="https://licindia.in/o/lic-theme/images/wheelchair.svg" alt="" />
            </div>
        </div>

    )
}

export default HeaderTop