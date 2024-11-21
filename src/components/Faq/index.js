import React from 'react';
import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title: "What is Hanuman?",
      content: `Hanuman is a fun and energetic token on the Solana blockchain, inspired by the bold and cheerful spirit of the Hanuman. It combines the excitement of meme culture with the power of cutting-edge blockchain technology.`,
    },
    {
      title: "How do I buy Hanuman tokens?",
      content:
        "Hanuman is a fun and energetic token on the Solana blockchain, inspired by the bold and cheerful spirit of the Hanuman. It combines the excitement of meme culture with the power of cutting-edge blockchain technology.",
    },
    {
      title: "What makes Hanuman different from other meme tokens?",
      content: `Hanuman is a fun and energetic token on the Solana blockchain, inspired by the bold and cheerful spirit of the Hanuman. It combines the excitement of meme culture with the power of cutting-edge blockchain technology.`,
    },
    {
      title: "What are the benefits of holding Hanuman tokens?",
      content: 'Hanuman is a fun and energetic token on the Solana blockchain, inspired by the bold and cheerful spirit of the Hanuman. It combines the excitement of meme culture with the power of cutting-edge blockchain technology.',
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