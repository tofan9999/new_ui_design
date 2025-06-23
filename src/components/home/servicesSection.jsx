import React from 'react'

function servicesSection() {
  return (
    <>
    <section>
        <div className='mt-20 max-md:w-[98vw]'>
            <div className='flex flex-col gap-3 max-md:w-[98vw] justify-center items-center'>
                <h1 className="text-4xl max-md:text-3xl max-md:w-[50vh] text-center">lorem15A Simple transporent approach</h1>
                <p className='md:w-[130vh] max-md:w-[50vh] flex justify-center items-center text-center '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor nemo,
                     pariatur impedit dolorem temporibus consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos explicabo distinctio eius consectetur.
                      Provident, rerum. </p>
            </div>

            <div className='mx-[5.5vh] my-[5vh] p-60 max-md:p-[40vw] bg-gray-200 relative'>

                <p className='text-black bg-white md:w-[50vh] bottom-0 right-35  absolute p-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium in quas at atque. Itaque.</p>

            </div>

             <div className='mx-[5.5vh] my-[5vh] p-60 max-md:p-[40vw] bg-gray-200 relative'>

                <p className='text-black bg-white md:w-[50vh] bottom-0 left-35  absolute p-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium in quas at atque. Itaque.</p>

            </div>


        </div>
    </section>
    </>
  )
}

export default servicesSection