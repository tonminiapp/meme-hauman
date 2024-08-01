import React from 'react';

const Title = ({ children, className, ...props }) => {

    return (
        <div className={`text-[40px] text-white max-md:text-[32px] ${className}`} {...props} style={{ textShadow: '0 4px 0 #FF5DF97F' }}>
            {children}
        </div>
    );
}

export default Title;