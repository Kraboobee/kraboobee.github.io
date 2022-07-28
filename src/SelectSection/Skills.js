import React from 'react'
import { skillList } from '../Classes'

const SkillSection = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-col gap-3 md:h-96 overscroll-auto overflow-auto px-2'>
            { skillList.map((skill) => (
                <div>
                    <h1 className='text-left text-2xl font-semibold text-teal-400'>
                        { skill.title }
                    </h1>
                    <p className='text-xl font-medium mb-1'>
                        { skill.subtitle }
                    </p>
                    <p className='text-lg mb-1'>
                        { skill.description }
                    </p>
                </div>
            )) }
            </div>
        </div>
    )
}

export default SkillSection