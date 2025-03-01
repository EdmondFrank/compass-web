import classnames from 'classnames';
import style from '@modules/submitProject/index.module.css';
import React from 'react';

const Banner = () => {
  return (
    <div
      className={classnames(
        'relative h-40 overflow-hidden bg-[#2c5fea]',
        style.headerBgLine
      )}
    >
      <div
        className={classnames(
          'absolute -top-16  right-10 h-[303px] w-[490px] md:-right-[300px]',
          style.headerBgGraph
        )}
      ></div>
      <div className="relative mx-auto w-[1000px] pt-12 text-5xl font-medium text-white md:w-full md:px-2">
        Enroll your project
      </div>
    </div>
  );
};

export default Banner;
