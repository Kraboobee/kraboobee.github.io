import React from 'react'
import { skillList } from '../Classes'

const SkillSection = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-col gap-3 h-96 overscroll-auto overflow-auto px-2'>
            { skillList.map((skill) => (
                <div>
                    <h1 className='text-left text-2xl font-semibold text-teal-500/80'>
                        { skill.title }
                    </h1>
                    <br />
                    <p className='text-xl font-medium'>
                        { skill.subtitle }
                    </p>
                    <p className='text-lg'>
                        { skill.description }
                    </p>
                </div>
            )) }
            </div>
        </div>
    )
}

export default SkillSection