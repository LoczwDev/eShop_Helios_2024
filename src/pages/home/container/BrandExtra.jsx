import React from "react";

export const BrandExtra = ({ className }) => {
  return (
    <section className={`${className}`}>
      <div className="w-full flex lg:flex-row md:flex-row flex-col lg:gap-y-0 md:gap-y-0 gap-y-3 items-center justify-between gap-x-5">
        <div className="lg:w-1/3 md:w-1/2 w-full">
          <img
            className="w-full rounded-lg"
            src="https://bizweb.dktcdn.net/100/508/659/themes/939030/assets/three_watch_v_01.jpg?1710404714890"
            alt=""
          />
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full">
          <img
            className="w-full rounded-lg"
            src="https://bizweb.dktcdn.net/100/508/659/themes/939030/assets/three_watch_v_02.jpg?1710404714890"
            alt=""
          />
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full">
          <img
            className="w-full rounded-lg"
            src="https://bizweb.dktcdn.net/100/508/659/themes/939030/assets/three_watch_v_03.jpg?1710404714890"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
