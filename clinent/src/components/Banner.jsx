import React from 'react';

const Banner = () => {
  return (
    <div className=" bg-yellow-300 p-[220px] relative rounded-b-[20%]">
      <div className="container mx-auto text-center text-white">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold">
          Welcome to My School
        </h1>
        <p className="mt-4 text-base lg:text-lg xl:text-xl">
          Discover amazing content and services.
        </p>
      </div>

    </div>
  );
};

export default Banner;
