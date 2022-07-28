import { React, useState } from 'react';
import SkillSection from './Skills';
import EducationSection from './Education';
import ExperienceSection from './Experience';
import ContactSection from './Contact';

function SelectSection() {
    const [section, setSection] = useState(<SkillSection />);

    return (
        <div>
            <div className='flex flex-row gap-3 mb-5'>
                    <div className='bg-gradient-to-br from-purple-500 to-teal-700 py-1 px-1 rounded-md'>
                        <button
                            className='bg-black rounded-md px-2 py-2 text-white text-2xl font-medium hover:bg-gradient-to-br from-purple-500 to-teal-700 hover:text-white focus:bg-gradient-to-br focus:text-white'
                            onClick={() => setSection(<SkillSection />)}>
                            Skills
                        </button>
                    </div>
                    <div className='bg-gradient-to-br from-purple-500 to-teal-700 py-1 px-1 rounded-md'>
                        <button
                            className='bg-black rounded-md px-2 py-2 text-white text-2xl font-medium hover:bg-gradient-to-br from-purple-500 to-teal-700 hover:text-white focus:bg-gradient-to-br focus:text-white'
                            onClick={() => setSection(<EducationSection />)}>
                            Education
                        </button>
                    </div>
                    <div className='bg-gradient-to-br from-purple-500 to-teal-700 py-1 px-1 rounded-md'>
                        <button
                            className='bg-black rounded-md px-2 py-2 text-white text-2xl font-medium hover:bg-gradient-to-br from-purple-500 to-teal-700 hover:text-white focus:bg-gradient-to-br focus:text-white'
                            onClick={() => setSection(<ExperienceSection />)}>
                            Experience
                        </button>
                    </div>
                    <div className='bg-gradient-to-br from-purple-500 to-teal-700 py-1 px-1 rounded-md'>
                        <button
                            className='bg-black rounded-md px-2 py-2 text-white text-2xl font-medium hover:bg-gradient-to-br from-purple-500 to-teal-700 hover:text-white focus:bg-gradient-to-br focus:text-white'
                            onClick={() => setSection(<ContactSection />)}>
                            Contact
                        </button>
                    </div>
            </div>
            <div className='h-1/2'>
                { section }
            </div>
        </div>
    )
}

export default SelectSection

// <div className='flex flex-row gap-3'>
//     <Button name={ "Skills" } />
//     <Button name={ "Education" } />
//     <Button name={ "Experience" } />
// </div>