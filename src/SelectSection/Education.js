import React from 'react'
import { educationList } from '../Classes'

const EducationSection = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-col gap-3 md:h-96 overscroll-auto overflow-auto px-2'>
            { educationList.map((edu) => (
                <div>
                    <h1 className='text-left text-2xl font-semibold text-teal-400'>
                        { edu.certification }
                    </h1>
                    <p className='text-xl font-medium'>
                        { edu.institution }
                    </p>
                    <p className='text-lg mb-1'>
                        { edu.date[0] }-{ edu.date[1]}
                    </p>
                    <p className='text-lg'>
                        { edu.summary }
                    </p>
                </div>
                )) }
            </div>
        </div>
    )
}

export default EducationSection