import React from 'react';

interface ITitle {
  text: string;
  children?: React.ReactNode;
}

const Title = ({ text, children }: ITitle) => {
  return (
    <div
      className={`mb-4 ${
        typeof children !== 'undefined'
          ? 'flex justify-between items-center'
          : ''
      }`}
    >
      <h2 className='font-bold text-lg text-center'>{text}</h2>
      {children}
    </div>
  );
};

export { Title };
