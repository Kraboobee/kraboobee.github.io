import React from 'react';
import images from '../img';

const Generic = () => {
    return (
        <div className='container mx-auto mb-5'>
            <div className='flex flex-row items-center justify-between mx-auto px-5 bg-slate-700'>
            {/* <div className='flex flex-row items-center justify-between border-2 rounded-md mx-5 bg-slate-700'> */}
                <div className="basis 1/4">
                    <img className='object-cover h-screen'
                    src={ images.SelfPortraitDarkPng } alt="" />
                </div>
                <div className='basis-1/2 font-extralight text-left'>
                    <h1 className='text-left text-8xl font-semibold text-red-500'>
                        Kaamraan Raboobee
                    </h1>
                    <br />
                    <p className='text-3xl font-medium'>
                        Full Stack Software Engineer
                    </p>
                    <p className='text-lg'>
                        Specialising in Web Development
                    </p>
                    <br />
                    <p className='text-lg'>
                        This includes not only questions about the type of software being used, but also the specific functions and features used most often in that software.
                    </p>
                </div>

                {/* <div className="basis 1/4">
                    <img className='w-64 rounded-lg object-cover'
                    src={ images.SelfPortraitDark } alt="" />
                </div> */}
            </div>      
        </div>
    )
}

export default Generic