import { FaCircleCheck } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";


const PlansCard = ({PlansArr}) => {

    return (
        <div>
            <div className="row gap-4 ms-1 d-flex">
                {PlansArr.map((value, index) => {
                    return <div key={index} className="col-12 col-md-5 d-flex flex-fill relative border-[1.5px] border-[#00417C] rounded-t-2xl pt-4 px-0 shadow-md my-8">
                        <div className='px-3 '>
                            <p className='text-[#00417C] font-bold'>LIC's</p>
                            <p className='font-bold text-2xl'>{value.PlanName}</p>
                            {value.PlansBenefit.map((value, index) => {
                                return <div key={index} className='flex justify-center gap-2 my-3'>
                                    <FaCircleCheck color='#00417C' className='a_checkicon_size' style={{ fontSize: '10px', flexShrink: 0 }} />
                                    <p className='text-[13px]'>{value}</p>
                                </div>
                            })}
                        </div>
                        <div className=' absolute a_plan_box w-full bottom-[-55px] cursor-pointer transition duration-300 hover:bg-[#FCDC56] hover:text-blue-600  flex items-center justify-center gap-2 py-3 rounded-b-2xl bg-[#114E85] text-white font-bold text-xl'>
                            <h1>Buy Online</h1>
                            <FaArrowRightLong />
                        </div>
                    </div>
                })}
                <div className="col-12 col-md-6"></div>
            </div>
        </div>
    )
}

export default PlansCard