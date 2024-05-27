import React from 'react'
import { IoMdHome } from "react-icons/io";
import { Link } from 'react-router-dom';

const HeaderBottom = () => {
  return (
    <div>
      <nav className='mx-auto px-4 flex justify-between items-center text-[#00417C] font-bold text-[15px]'>
        <div className='ps-[120px]'>
          <Link to={"/"}><IoMdHome /></Link>
        </div>
        <div>
          <Link to={"/about-us"}>About Us</Link>
        </div>
        <div>
          <Link to={"/products"}>Products</Link>
        </div>
        <div>
          <Link to={"/groupschemes"}>Group Schemes</Link>
        </div>
        <div>
          <Link to={"/investorrelation"}>Investor Relation</Link>
        </div>
        <div>
          <Link to={"/nri"}>NRI</Link>
        </div>
        <div>
          <button class="bg-[#BB2E25] text-white font-semibold py-[6px] px-1 rounded-md ">
            Group Gratuity Scheme
          </button>
        </div>
        <div>
          <button class="pay-premium-button btn font-semibold border-black">
            Pay Premium
          </button>
        </div>
        <div>
          <button class="login-button btn font-semibold border-black">
            Login
          </button>
        </div>
      </nav>
    </div>
  )
}

export default HeaderBottom