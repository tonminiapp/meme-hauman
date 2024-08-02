import React from 'react';

const SmallCard = ({ title, description, className, ...rest }) => {

  return (
    <div className={`border mb-[14px] bg-black min-h-[185px] border-[#91268E] p-[24px] rounded-[8px] ${className}`} style={{ boxShadow: '0px 14px 0 #EC52E7' }} {...rest}>
      <div className='text-[24px] max-md:text-[18px] leading-none mb-[8px]'>{title}</div>
      <div className='text-[16px] max-md:text-[14px] leading-[35px] max-md:leading-[24px] font-jaka'>{description}</div>
    </div>
  );
}

export default SmallCard;