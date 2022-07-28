import React from 'react';
import Button from '../Button/Button';
import images from '../img';

const Generic = () => {
    return (
        <div className='container mx-auto mb-5'>
            <div className='flex flex-row items-center justify-between mx-auto px-5'>
            {/* <div className='flex flex-row items-center justify-between border-2 rounded-md mx-5 bg-slate-700'> */}
                <div className="basis 1/4">
                    <img className='object-contain h-screen'
                    src={ images.SelfPortraitDarkPng } alt="" />
                </div>
                <div className='basis-1/2 text-left'>
                    <h1 className='text-left text-8xl font-semibold text-teal-500/80'>
                        Kaamraan Raboobee
                    </h1>
                    <br />
                    <p className='text-3xl font-medium'>
                        Full Stack Software Engineer
                    </p>
                    <p className='text-xl'>
                        Specialising in Web Development
                    </p>
                    <br />
                    <div className='flex flex-row gap-3'>
                        <Button name={ "Skills" } />
                        <Button name={ "Education" } />
                        <Button name={ "Projects" } />
                        <Button name={ "Contact" } />
                    </div>
                </div>
            </div>      
        </div>
    )
}

export default Generic


// <!-- HTML !-->
// <button class="button-29" role="button">Button 29</button>

// /* CSS */
// .button-29 {
//   align-items: center;
//   appearance: none;
//   background-image: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);
//   border: 0;
//   border-radius: 6px;
//   box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;
//   box-sizing: border-box;
//   color: #fff;
//   cursor: pointer;
//   display: inline-flex;
//   font-family: "JetBrains Mono",monospace;
//   height: 48px;
//   justify-content: center;
//   line-height: 1;
//   list-style: none;
//   overflow: hidden;
//   padding-left: 16px;
//   padding-right: 16px;
//   position: relative;
//   text-align: left;
//   text-decoration: none;
//   transition: box-shadow .15s,transform .15s;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   white-space: nowrap;
//   will-change: box-shadow,transform;
//   font-size: 18px;
// }

// .button-29:focus {
//   box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
// }

// .button-29:hover {
//   box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
//   transform: translateY(-2px);
// }

// .button-29:active {
//   box-shadow: #3c4fe0 0 3px 7px inset;
//   transform: translateY(2px);
// }