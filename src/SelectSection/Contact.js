import React from 'react'
import { contactList } from '../Classes'

const ContactSection = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-col gap-3 h-96 overscroll-auto overflow-auto px-2'>
            { contactList.map((contact) => (
                <div>
                    <h1 className='text-left text-2xl font-semibold text-teal-400'>
                        { contact.name }
                    </h1>
                    <p className='text-xl font-medium'>
                        <a href={ contact.link }>
                            { contact.info }
                        </a> 
                    </p>
                </div>
                )) }
            </div>
        </div>
    )
}

export default ContactSection