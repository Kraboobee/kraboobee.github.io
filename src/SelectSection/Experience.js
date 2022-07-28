import React from 'react'
import { experienceList } from '../Classes'

const ExperienceSection = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-col gap-3 md:h-96 overscroll-auto overflow-auto px-2'>
            { experienceList.map((exp) => (
                <div>
                    <h1 className='text-left text-2xl font-semibold text-teal-400'>
                        { exp.role }
                    </h1>
                    <p className='text-xl font-medium'>
                        { exp.company }
                    </p>
                    <p className='text-lg mb-1'>
                        { exp.date[0] }-{ exp.date[1]}
                    </p>
                    <ul className='list-disc'>
                        { exp.tasks.map((task) => (
                            <li className='text-lg mb-1'>
                                { task }
                            </li>
                        ))}
                    </ul>
                </div>
            )) }
            </div>
        </div>
    )
}

export default ExperienceSection