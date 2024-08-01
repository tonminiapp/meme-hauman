import React from 'react';

const Button = ({ children, className, ...rest }) => {

    return (
        <div className={`p-[2px] bg-[#FFC683] w-fit rounded-full transition-all ease-in-out active:scale-95 ${className}`}>
            <div className='p-[1px] bg-black w-fit rounded-full'>
                <button
                    className="uppercase py-2 px-6 text-white text-[20px] bg-gradient-to-b from-[#93278F] to-[#AF31C2] rounded-full border-[#780A7D] border max-md:text-[16px] max-md:py-1 max-md:px-4"
                    style={{
                        boxShadow: 'inset 0 0 24px 0 rgba(0, 0, 0, 0.25)',
                    }}
                    {...rest}
                >
                    {children}
                </button>
            </div>
        </div >
    );
}

export default Button;