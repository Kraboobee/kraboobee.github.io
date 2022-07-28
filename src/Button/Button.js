import React from 'react'

function Button(props) {
    return (
        <div className='bg-gradient-to-br from-purple-500 to-teal-700 py-1 px-1 rounded-md'>
            <button
                className='bg-black rounded-md px-2 py-2 text-white text-2xl font-medium hover:bg-gradient-to-br from-purple-500 to-teal-700 hover:text-white'>
                {/* className='bg-gradient-to-br from-orange-500 to-orange-700 hover:bg-gradient-to-tl py-1 px-4 rounded-md text-2xl font-medium'> */}
                { props.name }
            </button>
        </div>
    )
}

export default Button