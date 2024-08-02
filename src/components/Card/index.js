import React from 'react';

const Card = ({ title, description, className, light, ...rest }) => {

  const boxShadowColor = light ? '#1E1E1E66' : '#EC52E7';

  return (
    <div
      className={`relative border text-center border-[#91268E] mb-[14px] p-[24px] rounded-[30px] bg-[#0a0a0a] ${light && "border-[#FFACFC] !bg-[#FF5DF9]"} ${className}`}
      style={{ boxShadow: `0px 14px 0 ${boxShadowColor}` }}
      {...rest}
    >
      <div className="absolute bg-[#4C0665] z-[-1] opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[140%] blur-[60px] max-md:blur-[120px] rounded-full"></div>
      <div className='text-[24px] max-md:text-[18px] leading-none mb-[8px]'
        style={{
          textShadow: '0 4px 0 #000'
        }}
      >
        {title}
      </div>
      <div className='text-[16px] max-md:text-[14px] leading-[35px] max-md:leading-[24px] font-jaka'>{description}</div>
    </div>
  );
}

export default Card;