import React from 'react';
import Title from '../Title';
import Countdown from 'react-countdown';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import DownIcon from '../../assets/images/down.svg';
import Button from '../Button';

const PresaleCard = ({ ...props }) => {
  const renderer = ({ hours, minutes, seconds, completed }) => {
    const days = Math.ceil(hours / 24);
    const hoursLeft = hours % 24;

    return (
      <div className="flex justify-center gap-8 max-md:gap-4">
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-[3px] w-[85px] h-[47px] max-md:w-[60px] max-md:h-[38px] flex items-center justify-center text-[40px] max-md:text-[30px] leading-none text-[#F988F5] [text-shadow:_0_1px_0_#91268E,_1px_0_0_#91268E,_0_-1px_0_#91268E,_-1px_0_0_#91268E]">{days}</div>
          <div className="text-[16px] max-md:text-[14px] font-jaka mt-3">Days</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-[3px] w-[85px] h-[47px] max-md:w-[60px] max-md:h-[38px] flex items-center justify-center text-[40px] max-md:text-[30px] leading-none text-[#F988F5] [text-shadow:_0_1px_0_#91268E,_1px_0_0_#91268E,_0_-1px_0_#91268E,_-1px_0_0_#91268E]">{hoursLeft}</div>
          <div className="text-[16px] max-md:text-[14px] font-jaka mt-3">Hours</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-[3px] w-[85px] h-[47px] max-md:w-[60px] max-md:h-[38px] flex items-center justify-center text-[40px] max-md:text-[30px] leading-none text-[#F988F5] [text-shadow:_0_1px_0_#91268E,_1px_0_0_#91268E,_0_-1px_0_#91268E,_-1px_0_0_#91268E]">{minutes}</div>
          <div className="text-[16px] max-md:text-[14px] font-jaka mt-3">Minutes</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-[3px] w-[85px] h-[47px] max-md:w-[60px] max-md:h-[38px] flex items-center justify-center text-[40px] max-md:text-[30px] leading-none text-[#F988F5] [text-shadow:_0_1px_0_#91268E,_1px_0_0_#91268E,_0_-1px_0_#91268E,_-1px_0_0_#91268E]">{seconds}</div>
          <div className="text-[16px] max-md:text-[14px] font-jaka mt-3">Seconds</div>
        </div>
      </div>
    );
  };

  return (
    <div {...props}>
      <div
        className={`border-[2px] bg-black border-b-0 text-center border-[#FF8EFB] p-[24px] rounded-t-[16px]`}
      >
        <Title className="mb-8 max-md:text-[28px]">Presale Live In</Title>
        <Countdown
          date={Date.now() + 50000000}
          renderer={renderer}
        />
      </div>
      <div className='bg-[#FF5DF9] p-[24px] rounded-b-[16px]'>
        <div className="flex items-center justify-between bg-black h-[84px] max-md:h-[70px] px-[24px] rounded-[12px]">
          <input className='bg-transparent text-[28px] max-md:text-[24px] w-full h-[36px] outline-none' defaultValue={200} />
          <Menu>
            <MenuButton className='flex items-center gap-2 mr-5 cursor-pointer'>
              <img className='w-6 h-6' src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png" alt="usdc" />
              <div>USDC</div>
              <img className='w-2.5 h-2.5' src={DownIcon} alt="down" />
            </MenuButton>
            <MenuItems anchor="bottom">
              <div className="flex flex-col justify-center p-3 mt-2 text-black bg-white rounded-[12px] border border-black">
                <MenuItem>
                  <div className='flex items-center gap-2 hover:bg-black cursor-pointer transition ease-in-out rounded-[8px] py-1 px-2 hover:text-white'>
                    <img className='w-6 h-6' src="https://cryptologos.cc/logos/solana-sol-logo.png" alt="usdc" />
                    <div>SOL</div>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className='flex items-center gap-2 hover:bg-black cursor-pointer transition ease-in-out rounded-[8px] py-1 px-2 hover:text-white'>
                    <img className='w-6 h-6' src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png" alt="usdc" />
                    <div>USDC</div>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className='flex items-center gap-2 hover:bg-black cursor-pointer transition ease-in-out rounded-[8px] py-1 px-2 hover:text-white'>
                    <img className='w-6 h-6' src="https://cryptologos.cc/logos/tether-usdt-logo.png" alt="usdc" />
                    <div>USDT</div>
                  </div>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
        <div className="flex items-center justify-between bg-black h-[56px] max-md:h-[48px] px-[24px] rounded-[12px] mt-5">
          <div className='text-[16px]'>843821</div>
          <div className='flex items-center gap-2'>
            <img className='w-6 h-6' src="logo.png" alt="usdc" />
            <div>Hanuman</div>
          </div>
        </div>
        <div className="p-[2px] bg-[#FFC683] rounded-full transition-all ease-in-out active:scale-95 w-full mt-5">
          <div className='p-[1px] bg-[#FF5DF9] rounded-full'>
            <button
              className="uppercase py-2 px-6 text-white text-[20px] bg-[#0000007F] rounded-full border-[#780A7D] border w-full max-md:text-[16px] max-md:py-1.5 max-md:px-4"
              style={{
                boxShadow: 'inset 0 0 24px 0 rgba(0, 0, 0, 0.25)',
              }}
            >
              Secure your spot
            </button>
          </div>
        </div >
      </div>
    </div>
  );
}

export default PresaleCard;