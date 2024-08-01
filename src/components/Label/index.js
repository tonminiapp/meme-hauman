import React from 'react';

const Label = ({ children, className, ...rest }) => {

    return (
        <div className='p-[2px] bg-[#FFC683] w-fit rounded-full'>
            <div className='p-[1px] bg-black w-fit rounded-full'>
                <div
                    className={`font-jaka font-semibold py-1 px-8 text-[#550059] text-[16px] bg-gradient-to-b from-[#FF8845] to-[#FFB545] rounded-full border-[#780A7D] border max-md:text-[14px] max-md:py-1 max-md:px-6 ${className}`}
                    style={{
                        boxShadow: 'inset 0 0 24px 0 rgba(0, 0, 0, 0.25)',
                    }}
                    {...rest}
                >
                    {children}
                </div>
            </div>
        </div >
    );
}

export default Label;