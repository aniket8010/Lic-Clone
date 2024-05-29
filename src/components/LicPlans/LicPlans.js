import React, { useState } from 'react'
import PlansCard from '../MyCards/PlansCard'
import { PlansArr1, PlansArr2, PlansArr3, PlansArr4, PlansArr5 } from '../../Data/PlansData'

const LicPlans = ({ plansButtons }) => {
    const [plansContent, setPlansContent] = useState(PlansArr1)
    const [activeButton, setActiveButton] = useState(plansButtons[0]);

    const handlePlanContent = (value) => {
        setActiveButton(value);

        if (value === "Protect my Family") {
            setPlansContent(PlansArr1);
        } else if (value === "Health Care") {
            setPlansContent(PlansArr2);
        } else if (value === "Wealth Creation") {
            setPlansContent(PlansArr3);
        } else if (value === "Chlidren's Future Planning") {
            setPlansContent(PlansArr4);
        } else if (value === "Retirement Planning") {
            setPlansContent(PlansArr5);
        }
    };

    return (
        <>
            <div className="pt-3 px-20 w-[69%] content-start">
                <div>
                    <h1 className='text-[#00417C] text-4xl font-bold'>Buy LIC plans tailored for you!</h1>
                </div>
                <div>
                    <h1 className='text-xl py-2 font-bold'>Discover insurance plans as per your needs</h1>
                </div>
                <div className='my-2 justify-between d-flex'>
                    {plansButtons.map((value, index) => {
                        return <button onClick={() => handlePlanContent(value)}
                            key={index} className={`border-[1px]  border-[#00417C] rounded-full px-3 py-[6px] transition duration-400 ${activeButton === value ? 'bg-[#114E85] text-white ' : 'border-[#00417C] text-[#00417C] hover:bg-yellow-300'}`}>
                            {value}
                        </button>
                    })}
                </div>
                {<PlansCard PlansArr={plansContent} />}
            </div >
        </>
    )
}

export default LicPlans