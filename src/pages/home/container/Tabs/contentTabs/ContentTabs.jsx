import React from "react";
import { Articles } from "../../Articles";

export const ContentTabs = ({ data, className }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 gap-y-3 gap-x-3 ">
      {data?.map((item, index) => (
        <Articles data={item} key={index} className={className} />
      ))}
    </div>
  );
};
