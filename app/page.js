import React from 'react';
import Watch from './UI component/watch';

const UserLogin = () => {
  return (
    <div className="relative bg-white w-full h-screen overflow-hidden flex flex-col items-center justify-center py-[109px] pr-[267px] pl-[268px] box-border gap-[125px]">
      <img
        className="absolute my-0 mx-[!important] top-[109px] left-[calc(50% - 237px)] w-[475px] h-[82px] object-cover z-[0]"
        alt=""
        src="/stengglogo.svg" 
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
        <Watch class="watch" />
        <Watch class="watch" />
        <Watch class="watch" />
        <Watch class="watch" />
        <Watch class="watch" />
        <Watch class="watch" />
      </div>
    </div>
  );
};


export default UserLogin;