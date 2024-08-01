import React from 'react';

const IconButton = ({ icon, className, ...rest }) => {

    return (
        <div className='p-[2px] bg-[#FFC683] w-fit rounded-full transition-all ease-in-out active:scale-95'>
            <div className='p-[1px] bg-black w-fit rounded-full'>
                <button
                    className={`w-[50px] h-[50px] max-md:w-10 max-md:h-10 rounded-full border-[#780A7D] border flex items-center justify-center ${className}`}
                    style={{
                        boxShadow: 'inset 0 0 24px 0 rgba(0, 0, 0, 0.25)',
                    }}
                    {...rest}
                >
                    <img className="max-md:w-5 max-md:5" src={icon} alt="icon" />
                </button>
            </div>
        </div >
    );
}

export default IconButton;