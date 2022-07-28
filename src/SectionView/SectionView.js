import React from 'react'

const SectionView = (props) => {
    if (!props.date)
    {
        return (
            <div className='container mx-auto'>
                <div className='flex flex-col gap-3'>
                    <div className='text-3xl'>
                        { props.name }
                    </div>
                    <div className='text-xl'>
                        { props.subtitle }
                    </div>

                </div>

            </div>
        )
    }

    return (
        <div className='container mx-auto'>
            <div className='flex flex-col gap-3'>
                <div className='text-3xl'>
                    { props.name }
                </div>
                <div className='text-xl'>
                    { props.subtitle }
                </div>
                <div className='text-xl'>
                    { props.date }
                </div>
                <div className='text-xl'>
                    { props.desc }
                </div>
            </div>
        </div>
    )
}

export default SectionView