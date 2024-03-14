import React from 'react'

export default function Sidebar() {
  return (
    <div>
        {/* container div starts */}



            <div className='w-1/4 h-screen bg-[#2E2727]'>
                <div >
                    <h2 className='text-white text-center text-xl font-medium pt-14'>
                        Contents
                    </h2>
                </div>

        {/* navigation starts */}

                <div className='ml-6' >
        {/* first one  */}
                    <div className='flex  items-center mt-10'>
                        <div className='w-2 h-2 bg-[#D94242] rounded-full mr-8'>

                        </div>

                        <div className='w-fit'>
                            <p className='text-white text-base font-normal'>Basic calculator</p>
                            <div className={`w-full h-[1px] bg-[#38DF0E]`}>
                            </div>
                        </div>
                   </div>

        {/* second one  */}
        <div className='flex  items-center mt-6'>
                        <div className='w-2 h-2 bg-[#5F8F99] rounded-full mr-8'>

                        </div>

                        <div className='w-fit'>
                            <p className='text-white text-base font-normal'>Cgpa calculator</p>
                            <div className={`w-full h-[1px] bg-[#38DF0E]`}>
                            </div>
                        </div>
                   </div>

        {/* Third one  */}
        <div className='flex items-center mt-6'>
                        <div className='w-2 h-2 bg-[#FFFFFF] rounded-full mr-8'>

                        </div>

                        <div className='w-fit'>
                            <p className='text-white text-base font-normal'>Age calculator</p>
                            <div className={`w-full h-[1px] bg-[#38DF0E]`}>
                            </div>
                        </div>
                   </div>

        {/* Fourth one  */}
        <div className='flex items-center mt-6'>
                        <div className='w-2 h-2 bg-[#38DF0E] rounded-full mr-8'>

                        </div>

                        <div className='w-fit'>
                            <p className='text-white text-base font-normal'>Temperature calculator</p>
                            <div className={`w-full h-[1px] bg-[#38DF0E]`}>
                            </div>
                        </div>
                   </div>

        {/* Fifth one */}
        <div className='flex items-center mt-6'>
                        <div className='w-2 h-2 bg-[#FFF] rounded-full mr-8'>

                        </div>

                        <div className='w-fit'>
                            <p className='text-white text-base font-normal'>Css Unit Converter</p>
                            <div className={`w-full h-[1px] bg-[#38DF0E]`}>
                            </div>
                        </div>
                   </div>


                </div>

        {/* navigation ends */}
            </div>


    </div>
  )
}

