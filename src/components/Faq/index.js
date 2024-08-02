import React from 'react';
import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title: "What is Quokka?",
      content: `Quokka is a fun and energetic token on the Solana blockchain, inspired by the bold and cheerful spirit of the Quokka. It combines the excitement of meme culture with the power of cutting-edge blockchain technology.`,
    },
    {
      title: "How do I buy Quokka tokens?",
      content:
        "Quokka is a fun and energetic token on the Solana blockchain, inspired by the bold and cheerful spirit of the Quokka. It combines the excitement of meme culture with the power of cutting-edge blockchain technology.",
    },
    {
      title: "What makes Quokka different from other meme tokens?",
      content: `Quokka is a fun and energetic token on the Solana blockchain, inspired by the bold and cheerful spirit of the Quokka. It combines the excitement of meme culture with the power of cutting-edge blockchain technology.`,
    },
    {
      title: "What are the benefits of holding Quokka tokens?",
      content: 'Quokka is a fun and energetic token on the Solana blockchain, inspired by the bold and cheerful spirit of the Quokka. It combines the excitement of meme culture with the power of cutting-edge blockchain technology.',
    },
  ],
};

const FaqComponent = () => {
  return (
    <div className='font-jaka'>
      <Faq
        data={data}
        styles={{
          bgColor: '#00000000',
          titleTextColor: 'white',
          rowTitleColor: 'white',
          rowContentTextSize: '20px',
          rowContentColor: 'white',
          rowContentColor: '#00000000',
          arrowColor: "white",
        }}
      />
    </div>
  );
}

export default FaqComponent;