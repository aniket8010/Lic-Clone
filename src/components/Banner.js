import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <>
            <div className='w-full h-full relative'>
                <Carousel showStatus={false} showThumbs={false} showArrows={false} autoPlay={true}>
                    <div>
                        <img height={"100%"} width={"100%"} src="https://licindia.in/documents/d/guest/bannerenglishnew2" alt="" />
                    </div>
                    <div>
                        <img height={"100%"} width={"100%"} src="https://licindia.in/documents/d/guest/bannerenglishnew1" alt="" />
                    </div>
                    <div>
                        <img height={"100%"} width={"100%"} src="https://licindia.in/documents/d/guest/bannerenglishnew3" alt="" />
                    </div>
                    <div>
                        <img height={"100%"} width={"100%"} src="https://licindia.in/documents/d/guest/bannerenglishnew10" alt="" />
                    </div>
                    <div>
                        <img height={"100%"} width={"100%"} src="https://licindia.in/documents/d/guest/bannerenglishnew11" alt="" />
                    </div>
                    <div>
                        <img height={"100%"} width={"100%"} src="https://licindia.in/documents/d/guest/bannerenglishnew12" alt="" />
                    </div>
                    <div>
                        <img height={"100%"} width={"100%"} src="https://licindia.in/documents/d/guest/bannerenglishnew13" alt="" />
                    </div>
                    <div>
                        <img height={"100%"} width={"100%"} src="https://licindia.in/documents/d/guest/bannerenglishnew8" alt="" />
                    </div>
                </Carousel>
            </div>
            <section className='h-full w-full d-flex mx-auto justify-center bg-[#00417C] p-4'>
                <div className='row'>
                    <div className="col-12 col-md-6">
                        <h6 className='text-white font-semibold text-lg py-2'>I Want to</h6>
                        <select name="" id="" className='outline-none rounded px-2 py-2 font-semibold'>
                            <option value="Select">Select</option>
                            <option value="Select">Protect my family</option>
                            <option value="Select">Create wealth</option>
                            <option value="Select">Plans for childrens future</option>
                            <option value="Select">plan for my retirement</option>
                            <option value="Select">have health Cover</option>
                        </select>
                    </div>
                    <div className="col-12 col-md-6">
                        <h6 className='text-white font-semibold text-lg py-2'>I am</h6>
                        <select name="" id="" className='outline-none rounded px-2 py-2 font-semibold'>
                            <option value="Select">Select</option>
                            <option value="Select">Prospective Policy Holder</option>
                            <option value="Select">Existing Policy Holder</option>
                            <option value="Select">An NRI</option>
                            <option value="Select">An agent</option>
                            <option value="Select">Employee</option>
                            <option value="Select">Retired employee</option>
                        </select>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner