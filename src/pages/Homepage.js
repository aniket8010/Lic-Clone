import React from 'react'
import Banner from '../components/Banner'
import LicPlans from '../components/LicPlans/LicPlans'
import Expert from '../components/LicPlans/Expert'

const plansButtons = ["Protect my Family", "Health Care", "Wealth Creation", "Chlidren's Future Planning", "Retirement Planning"]
const Homepage = () => {
  return (
    <>
      <section className='w-full d-flex container h-10 bg-[#F3F2F2] border-t-2 mt-3 border-[#F5EAC3] items-center '>
        <div className='scroll_text w-full container'>
          <span className=''>
            "Invitation of Earnings Call-FY-2023-24"
          </span>
        </div>
      </section>
      <section>
        <div>
          <Banner />
          <div className='flex container '>
            <LicPlans plansButtons={plansButtons} />
            <Expert />
          </div>
        </div>
      </section>
    </>
  )
}

export default Homepage