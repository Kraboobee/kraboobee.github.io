import React from 'react'
import { experienceList } from '../Classes'

const ExperienceSection = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-col gap-3 h-96 overscroll-auto overflow-auto px-2'>
            { experienceList.map((exp) => (
                <div>
                    <h1 className='text-left text-2xl font-semibold text-teal-500/80'>
                        { exp.role }
                    </h1>
                    <br />
                    <p className='text-lg'>
                        { exp.company }
                    </p>
                    <p className='text-xl font-medium'>
                        { exp.date[0] }-{ exp.date[1]}
                    </p>
                    <p className='text-lg'>
                        { exp.tasks }
                    </p>
                </div>

            )) }
            </div>
        </div>
    )
}

export default ExperienceSection