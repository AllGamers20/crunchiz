
import React from 'react';
import Submit from './Submit';

const Call = () => {
  const Send = () => {
    const message = `Hi I need to order`;
    window.open(`https://wa.me/+96103672242?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="flex flex-col items-center justify-center p-16">
        <Submit onClick={Send}/>
    </div>
  );
};

export default Call;
